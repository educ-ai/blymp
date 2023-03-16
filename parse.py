import argparse
import json

def parse_input_to_csv(input_filename, output_filename):
    with open(input_filename, "r") as input_file:
        parsed_input_array = json.load(input_file)
    with open(output_filename, "w") as output_file:
        output_file.write("Title\tAuthor\tEmail\n")
        for parsed_input in parsed_input_array:
            channel_place = parsed_input.get("channel_place", "")
            if channel_place != "United States" and channel_place != "Canada":
                continue
            title = parsed_input.get("title", "")
            author = parsed_input.get("author", "")
            email = parsed_input.get("email", "")
            output_file.write(title + "\t")
            output_file.write(author + "\t")
            output_file.write(email + "\n")
    print("CSV file generated successfully.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Convert JSON input to CSV output")
    parser.add_argument("input_filename", type=str, help="name of the input JSON file")
    parser.add_argument("output_filename", type=str, help="name of the output CSV file")
    args = parser.parse_args()
    parse_input_to_csv(args.input_filename, args.output_filename)
