# Web 1 - Lab Day (Forms + DOM)

Demo: [https://drive.google.com/file/d/1q8Ek90F52sRy6r5Vfqn02qt4nkcZKYz4/view?usp=sharing]

## Instructions

1. Clone the repository to your local machine
2. Recreate the employee app presented in the demo video
3. Use the images provided in the `images` directory for the profile pictures
4. Once you are done, commit and push your changes

## Notes

- Run sass command:

  ```bash
  sass -w ./scss/styles.scss ./css/styles.css
  ```

- All input fields need to be required
- Add a pattern attribute for the **Email** input field to only accept `@canada.ca` email addresses
- The goal of the exercise is to become better with DOM manipulation, so avoid using **arrays** `[]` if you can and instead make use of the different methods such as `createElement`
- When clicking on the `Delete` button of each employee, it should first ask for a confirmation *"Are you sure you want to delete this employee?"* and offer the user a choice
- When selecting photos, make sure to choose from the `images` directory otherwise, it will not work

Good luck :)
