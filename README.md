# Bulls and Cows

Welcome to our Bulls and cows project. Here we present the main technologies that We have used in this project:

## Technologies Client Side

- **ViteJS (v5.0.8):** Used as the main framework to build dynamic user interfaces.
- **TailwindCSS (v3.4.1):** Utility design framework for fast and consistent development.
- **PostCSS (v8.4.33):** CSS processor used to extend and transform styles, integrated with Tailwind CSS.
- **Autoprefixer (v10.4.16):** Tool to automatically add browser prefixes to CSS styles.
- **React Router DOM (v6.21.2):** Library to manage routing in React applications.
- **Socket.io-client (v4.7.4):** Real time communication to the server side.
- **Zustand (v4.4.7):** Library for state management.

## Technologies Server Side

- **CORS (v2.8.5):** Secure communication between a client and a server across different domains.
- **Express (v4.18.2):** NodeJS Framework for easier creation of servers and management of routes, responses and requests.
- **Socket.io (v4.7.4)** Real time communication to the client side. 

## Conventions

|     Type     |                       Meaning                       |
| :----------: | :-------------------------------------------------: |
|   **feat**   |                    New features                     |
|   **fix**    |                      Bug fixes                      |
| **breaking** |                   Breaking change                   |
|  **build**   |            Changes in compilation system            |
|  **chore**   |  Changes that don't affect production environment   |
|    **ci**    | Changes in the continuous integration configuration |
|   **docs**   |              Changes in documentation               |
|   **perf**   |               Updates in performance                |
| **refactor** |                Refactoring processes                |
|  **revert**  |       Rollbacks to previous commit or changes       |
|  **style**   |                  Changes in syntax                  |
|   **test**   |                  Add or fix tests                   |

## Status codes

|            Status             |                                       Meaning                                        |
| :---------------------------: | :----------------------------------------------------------------------------------: |
|          **200 OK**           |                                  Successful request                                  |
|      **204 No Content**       |   Reques succeeded. Response doesn't contain any content that should be displayed    |
|      **400 Bad Request**      |                     Syntax error or the server cannot procces it                     |
|     **401 Unauthorized**      | Client is not authorized to access. Valid authentication credentials may be required |
|       **403 Forbidden**       |     Client doesn't have sufficient permissions to access the requested resource      |
|       **404 Not Found**       |    Resource cannot be found on the server. (incorrect URL or a deleted resource)     |
|       **409 Conflict**        | Request couldn't be completed. Conflict with the current state of the target source  |
| **500 Internal Server Error** |      When something goes wrong on the server and it cannot complete the request      |
