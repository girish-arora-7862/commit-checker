# Alvest React technical test

This is an estimated 2h long technical test for a React front developer.
Do what you can, there is extra work if you want to.
The next step will be to introduce your work and explain your choices.

This test is based on following stack : 

React 18 + Vite + Typescript + React Router + Hook Form + Zod + Axios + Tailwind css

## Getting started

There are 2 options for you to run this dev environment. Your choice :
1. Install and run locally on your host using npm/yarn/pnpm
2. Use docker to run it inside a node based container

### 1. Install locally
Install the dependencies:

```sh
npm|yarn|pnpm install
```

Build the assets:
```sh
npm|yarn|pnpm run build
```

Run dev server:

```sh
npm|yarn|pnpm run dev
```

### 2. Use a docker node based container
Verify that you have 'make' installed on your host, it should be there on linux.

For Mac :
```sh
brew install make
```

Build and run the container on port 3000 (see Makefile for more detail) :
```sh
make build start
```


## Screenshot

Here is a screenshot example of the application you need to build :

![Demo](/public/demo.png)

### Specifications

Build a commit finder web application that allows the user to display all the commits of a repository for a given date range.

For exemple, you have to be able to search the last 30 days commits of the `facebook/react` repository.

You will use [GitHub API](https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28) to get the commits of a repository. This API is rate limited, so make sure to handle the rate limit error. [Rate limits for the REST API](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28)

There is only one page : `/`

Two main sections are present on the page :

#### Form

A form to search all the commits of a repository

**Structure**

- The form contains 3 inputs :
  - The name of the repository that is a text input
  - The start date of the search that is a date picker
  - The end date of the search that is a date picker

**Validations :**

- The name of the repository is required
- The start date of the search is required
- The end date of the search is required
- The start date of the search can't be after the end date of the search

(Optionnal)
- There can't be more than 30 days between the two dates
- The end date can't be in the future

**Responsive :**

- In mobile screen, the form is displayed in a column, the title is centered and is smaller
- In desktop screen, the form is displayed in a row, the title starts at the left of the screen et is bigger

There is a screenshot of the application in mobile mode:

![Demo](/public/demo_mobile.png)


#### Table of commits

A table of the commits, that will display the **commit author**, the **date of the commit**, and the **link to the commit**.

The table should be scrollable.

### Errors

- Errors will be handled by displaying a simple toast with an error message.
- 404 error page should be handled

### Requirements :

Use Typescript, React Router for navigation, Hook Form for form handling and Axios for API calls. You can use Tailwind css for styling and Zod for validation, but it is not mandatory (use what you are used to).

To help you, this project comes with [shadcnUI](https://ui.shadcn.com/) that is a preset of UI components. You are free to use it or use any external component UI library if you wish to.
