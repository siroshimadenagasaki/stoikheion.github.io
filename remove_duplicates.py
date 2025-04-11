#!/usr/bin/env python3

import re

# List of forte-codes that have "*" property based on the PDF
star_forte_codes = [
    "1-1", "2-1", "2-2", "2-3", "2-4", "2-5", "2-6", "3-1", "3-9", "3-10", "3-12",
    "4-1", "4-3", "4-6", "4-7", "4-8", "4-9", "4-10", "4-17", "4-20", "4-21", "4-23",
    "4-24", "4-25", "4-26", "4-28", "5-1", "5-8", "5-11", "5-Z12", "5-15", "5-Z17",
    "5-22", "5-33", "5-34", "5-35", "5-Z37", "6-1", "6-Z4", "6-Z6", "6-7", "6-8",
    "6-Z13", "6-20", "6-Z23", "6-Z25", "6-Z26", "6-Z28", "6-Z29", "6-32", "6-35",
    "6-Z37", "6-Z38", "6-Z42", "6-Z45", "6-Z48", "6-Z49", "6-Z50", "7-1", "7-8",
    "7-Z12", "7-15", "7-Z17", "7-22", "7-33", "7-34", "7-35", "7-Z37", "8-1", "8-3",
    "8-6", "8-7", "8-8", "8-9", "8-10", "8-17", "8-20", "8-21", "8-23", "8-24",
    "8-25", "8-26", "8-28", "9-1", "9-6", "9-9", "9-10", "9-12", "10-1", "10-2",
    "10-3", "10-4", "10-5", "10-6", "11-1", "12-1"
]

# List of forte-codes that have "Z" property based on the PDF
z_forte_codes = [
    "4-Z15", "4-Z29", "5-Z12", "5-Z17", "5-Z18", "5-Z36", "5-Z37", "5-Z38",
    "6-Z3", "6-Z4", "6-Z6", "6-Z10", "6-Z11", "6-Z12", "6-Z13", "6-Z17", "6-Z19",
    "6-Z23", "6-Z24", "6-Z25", "6-Z26", "6-Z28", "6-Z29", "6-Z36", "6-Z37", "6-Z38",
    "6-Z39", "6-Z40", "6-Z41", "6-Z42", "6-Z43", "6-Z44", "6-Z45", "6-Z46", "6-Z47",
    "6-Z48", "6-Z49", "6-Z50", "7-Z12", "7-Z17", "7-Z18", "7-Z36", "7-Z37", "7-Z38",
    "8-Z15", "8-Z29"
]

def process_chords_file(input_file, output_file):
    """
    Process the chords.js file to remove duplicate entries with 'A' suffix in the forte-code,
    merging their data with the original entries.
    """
    print(f"Processing {input_file}...")

    # Read the entire file as one string
    with open(input_file, 'r') as f:
        content = f.read()

    # Find all chord objects by matching blocks between { and }
    # First, let's find where the data array starts
    data_start = content.find('data: [')
    if data_start == -1:
        print("Could not find the data array in the file")
        return
    
    # Find the position after the opening bracket
    array_start = content.find('[', data_start) + 1
    
    # Find the closing bracket of the array
    # We need to count brackets to handle nested objects
    bracket_count = 1  # We already found the opening bracket
    array_end = array_start
    
    while bracket_count > 0 and array_end < len(content):
        if content[array_end] == '[':
            bracket_count += 1
        elif content[array_end] == ']':
            bracket_count -= 1
        array_end += 1
    
    if bracket_count != 0:
        print("Could not find the end of the data array")
        return
    
    # Extract just the array content
    array_content = content[array_start:array_end-1].strip()
    
    # Now let's split the array content into individual chord objects
    chords = []
    brace_level = 0
    start_pos = 0
    
    for i, char in enumerate(array_content):
        if char == '{':
            if brace_level == 0:
                start_pos = i
            brace_level += 1
        elif char == '}':
            brace_level -= 1
            if brace_level == 0:
                # We found a complete chord object
                chord_obj = array_content[start_pos:i+1].strip()
                if chord_obj.endswith(','):
                    chord_obj = chord_obj[:-1]  # Remove trailing comma
                chords.append(chord_obj)
    
    print(f"Found {len(chords)} chord entries in the file.")
    
    # First pass: Clean up complement-forte-code values by removing only A suffixes
    cleaned_chords = []
    complement_codes_fixed = 0
    
    for chord in chords:
        # Check for complement-forte-code with A suffix only
        complement_match = re.search(r'"complement-forte-code":\s*"([^"]+)A"', chord)
        if complement_match:
            # Remove the A suffix from the complement-forte-code
            base_complement = complement_match.group(1)
            updated_chord = re.sub(
                r'"complement-forte-code":\s*"([^"]+)A"',
                f'"complement-forte-code": "{base_complement}"',
                chord
            )
            cleaned_chords.append(updated_chord)
            complement_codes_fixed += 1
        else:
            cleaned_chords.append(chord)
    
    print(f"Removed A suffix from {complement_codes_fixed} complement-forte-code values.")
    
    # Group chords by their base forte-code (without A/B suffix)
    forte_code_groups = {}
    
    for chord in cleaned_chords:
        # Extract the forte-code from the chord object
        match = re.search(r'"forte-code":\s*"([^"]+)"', chord)
        if match:
            forte_code = match.group(1)
            base_code = forte_code.rstrip("AB")
            
            if base_code not in forte_code_groups:
                forte_code_groups[base_code] = []
            
            forte_code_groups[base_code].append((forte_code, chord))
    
    # Process each group to merge A variants into base variants
    merged_chords = []
    variants_removed = 0
    
    for base_code, chord_list in forte_code_groups.items():
        # Skip if there's only one chord in this group
        if len(chord_list) == 1:
            merged_chords.append(chord_list[0][1])
            continue
        
        # Find the base, A, and B variants
        base_variant = None
        a_variant = None
        b_variant = None
        
        for forte_code, chord in chord_list:
            if forte_code == base_code:
                base_variant = chord
            elif forte_code == base_code + "A":
                a_variant = chord
            elif forte_code == base_code + "B":
                b_variant = chord
        
        # If we have both base and A variants, merge A's carter-number and complement-forte-code into base if they're null
        if base_variant and a_variant:
            # Extract values from base variant
            base_carter = re.search(r'"carter-number":\s*(null|"[^"]+")', base_variant)
            base_complement = re.search(r'"complement-forte-code":\s*(null|"[^"]+")', base_variant)
            base_name = re.search(r'name:\s*(null|"[^"]+")', base_variant)
            
            # Extract values from A variant
            a_carter = re.search(r'"carter-number":\s*(null|"[^"]+")', a_variant)
            a_complement = re.search(r'"complement-forte-code":\s*(null|"[^"]+")', a_variant)
            a_name = re.search(r'name:\s*(null|"[^"]+")', a_variant)
            
            # Merge A values into base if base is null
            updated_variant = base_variant
            
            if (base_carter and a_carter and 
                base_carter.group(1) == "null" and 
                a_carter.group(1) != "null"):
                updated_variant = re.sub(
                    r'"carter-number":\s*null', 
                    a_carter.group(0), 
                    updated_variant
                )
            
            if (base_complement and a_complement and 
                base_complement.group(1) == "null" and 
                a_complement.group(1) != "null"):
                updated_variant = re.sub(
                    r'"complement-forte-code":\s*null', 
                    a_complement.group(0), 
                    updated_variant
                )
            
            if (base_name and a_name and 
                base_name.group(1) == "null" and 
                a_name.group(1) != "null"):
                updated_variant = re.sub(
                    r'name:\s*null', 
                    a_name.group(0), 
                    updated_variant
                )
            
            # Add the updated base variant
            merged_chords.append(updated_variant)
            variants_removed += 1
            
            # Add B variant if it exists
            if b_variant:
                merged_chords.append(b_variant)
        elif not base_variant and a_variant:
            # If there's an A variant but no base variant, convert A to base
            updated_variant = re.sub(
                r'"forte-code":\s*"' + re.escape(base_code) + r'A"',
                f'"forte-code": "{base_code}"',
                a_variant
            )
            merged_chords.append(updated_variant)
            variants_removed += 1
            
            # Add B variant if it exists
            if b_variant:
                merged_chords.append(b_variant)
        else:
            # Otherwise, just add all variants from this group
            for _, chord in chord_list:
                merged_chords.append(chord)
    
    print(f"Removed {variants_removed} duplicate entries with 'A' suffix.")
    print(f"Reduced to {len(merged_chords)} chord entries after merging duplicates.")
    
    # Add '*' and 'Z' properties to each chord object
    final_chords = []
    star_count = 0
    z_count = 0
    
    for chord in merged_chords:
        # Extract the forte-code to check if this chord should have '*' or 'Z'
        forte_match = re.search(r'"forte-code":\s*"([^"]+)"', chord)
        if forte_match:
            forte_code = forte_match.group(1)
            has_star = forte_code in star_forte_codes
            has_z = forte_code in z_forte_codes or forte_code.startswith('Z') or 'Z' in forte_code
            
            # Add the new properties before the closing brace
            updated_chord = chord[:-1].rstrip() + ',\n'
            updated_chord += f'      "*": {str(has_star).lower()},\n'
            updated_chord += f'      "Z": {str(has_z).lower()}\n'
            updated_chord += '    }'
            
            final_chords.append(updated_chord)
            
            if has_star:
                star_count += 1
            if has_z:
                z_count += 1
        else:
            final_chords.append(chord)
    
    print(f"Added '*' property to {star_count} chords.")
    print(f"Added 'Z' property to {z_count} chords.")
    
    # Reconstruct the data array with the final chords
    new_array_content = ",\n".join(final_chords)
    new_content = content[:array_start] + "\n" + new_array_content + "\n  " + content[array_end-1:]
    
    # Write the updated content to the output file
    with open(output_file, 'w') as f:
        f.write(new_content)
    
    print(f"Updated chord data written to {output_file}")

if __name__ == "__main__":
    # Use the current directory's chords.js file
    input_file = "chords.js"
    output_file = "chords_merged.js"
    
    process_chords_file(input_file, output_file)
    print("Done!") 