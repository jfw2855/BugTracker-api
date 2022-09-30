# BugTracker | MERN

A project management tool that tracks project related issues<br/>
[Client Source Code](https://github.com/jfw2855/BugTracker-Client)

## Tech Stack

#### Frontend
- React (Hooks, State, Functional Components)
- PlotlyJS
- React-icons
- Axios
- React Bootstrap

#### Backend

- NodeJS
- Express
- JWT
- Bcrypt
- MongoDB
- Mongoose




<br>
<br>


## 🪲 Bug Tracker API Documentation 🐞
<br>


# 📁 Collection: Auth 🧑‍💻
<details>
<summary>Click to See Auth Endpoints</summary>


## End-point: sign up
Provide full credentials to successfully sign up a user
### Method: POST
>```
>{{url}}/sign-up
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
    "credentials": {
        "email": "johndoe@gmail.com",
        "password": "password123",
        "password_confirmation": "password123",
        "firstName": "John",
        "lastName": "Doe",
        "organization": "Demo",
        "role": "Full Stack Engineer"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: sign-in
Input user credentials to sign in
### Method: POST
>```
>{{url}}/sign-in
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
    "credentials": {
        "email": "johndoe@gmail.com",
        "password": "password321"
    }
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|0f8b5f5094aef72db9170fc3bab1a6bd|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: change password
Update the password by providing the old and new passwords
### Method: PATCH
>```
>{{url}}/change-password
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
    "passwords": {
        "old": "password123",
        "new": "password321"
    }
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|3c5a0773521934a86aa1b36f7fb25401|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: sign out
End session for user by logging out
### Method: DELETE
>```
>{{url}}/sign-out
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|3c5a0773521934a86aa1b36f7fb25401|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: GET users
Queries all members within the user's organization
### Method: GET
>```
>{{url}}/users
>```
### Body (**raw**)

```json

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|f6df70f779a56859acc2b5f50936430f|string|



</details>

<br>
<br>

# 📁 Collection: Project 🖥

<details>
<summary>Click to See Project Endpoints</summary>

## End-point: CREATE project
Creates a new project
### Method: POST
>```
>{{url}}/project
>```
### Body (**raw**)

```json
{
    "project": {
        "title":"Sample Project",
        "description": "This project is a sample project"

    }
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|138319de3bc85013af8baf973b8d119e|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: SHOW project
Queries a project
### Method: GET
>```
>{{url}}/project/:projectId
>```
### Body (**raw**)

```json

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|138319de3bc85013af8baf973b8d119e|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: SHOW all projects
Queries all projects within the user's organization
### Method: GET
>```
>{{url}}/project
>```
### Body (**raw**)

```json

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|138319de3bc85013af8baf973b8d119e|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: UPDATE project
Updates a project's details
### Method: PATCH
>```
>{{url}}/project/:projectId
>```
### Body (**raw**)

```json
{
    "project": {
        "title":"Update Project Title"

    }
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|138319de3bc85013af8baf973b8d119e|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: DELETE project
Removes a project from the database
### Method: DELETE
>```
>{{url}}/project/:projectId
>```
### Body (**raw**)

```json

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|138319de3bc85013af8baf973b8d119e|string|

</details>

<br>
<br>

# 📁 Collection: Issue 😵‍💫

<details>
<summary>Click to See Issue Endpoints</summary>

## End-point: CREATE issue
Creates a new issue for a project
### Method: POST
>```
>{{url}}/issue/project/:projectId
>```
### Body (**raw**)

```json
{
    "issue": {
        "title":"issue with fourth example",
        "priority": "major",
        "status": "open",
        "description": "test"

    }
}
```

### Query Params

|Param|value|
|---|---|
||null|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|fa0b59bfa104e7970f4ad1a0007f180e|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: SHOW issue
Queries an issue
### Method: GET
>```
>{{url}}/issue/:issueId
>```
### Body (**raw**)

```json

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|4b37d5a0240c58719bafd36cdbb4eaf0|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: SHOW all project issues
Shows all project issues
### Method: GET
>```
>{{url}}/issue/project/:projectId
>```
### Body (**raw**)

```json

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|4b37d5a0240c58719bafd36cdbb4eaf0|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: show all CLOSED org issues
Queries all issues in the user's organization with the status "Closed"
### Method: GET
>```
>{{url}}/issues/org/closed
>```
### Body (**raw**)

```json

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|1f2982b34f5f859acc0ecdc9bef8037c|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: SHOW user's issues
Queries all issues created by the user
### Method: GET
>```
>{{url}}/user/issues
>```
### Body (**raw**)

```json

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|1f2982b34f5f859acc0ecdc9bef8037c|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: UPDATE issue
Updates an issue's details
### Method: PATCH
>```
>{{url}}/issue/:issueId
>```
### Body (**raw**)

```json
{
    "issue": {
        "title":"only thing updated"

    }
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|56d78998ee236721610d29459a339a44|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: DELETE issue
Removes an issue from the database
### Method: DELETE
>```
>{{url}}/issue/:issueId
>```
### Body (**raw**)

```json

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|56d78998ee236721610d29459a339a44|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: DELETE team member
Removes an Issue team member from the issue
### Method: DELETE
>```
>{{url}}/issue/:issueId/:userId
>```
### Body (**raw**)

```json

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|4b37d5a0240c58719bafd36cdbb4eaf0|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: DELETE all issues from project
Removes all issues associated with a project
### Method: DELETE
>```
>{{url}}/issue/project/:projectId
>```
### Body (**raw**)

```json

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|b4069c27cb2a9ad1916686a29700abae|string|


</details>

<br>
<br>

# 📁 Collection: Comment 🗣

<details>
<summary>Click to See Comment Endpoints</summary>

## End-point: CREATE comment
Creates a comment for an issue
### Method: POST
>```
>{{url}}/comment/issue/:issueId
>```
### Body (**raw**)

```json
{
    "comment": {
        "body":"I'm having problems with centering a div!!! Someone please help"

    }
}
```

### Query Params

|Param|value|
|---|---|
||null|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|9ac9de65131b9bcd4397282952aa3141|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: UPDATE comment
Updates an issue comment
### Method: PATCH
>```
>{{url}}/comment/:issueId/:commentId
>```
### Body (**raw**)

```json
{
    "comment": {
        "body":"i have prob with div"

    }
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|d53bbaab5c48e0418f3586d4f91eea1d|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: DELETE comment
Removes a comment from an issue
### Method: DELETE
>```
>{{url}}/comment/:issueId/:commentId
>```
### Body (**raw**)

```json

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|a197e641599d1a1be20d2e9626d00efa|string|


</details>










_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
