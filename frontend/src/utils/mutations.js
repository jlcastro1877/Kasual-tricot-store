import { gq1 } from '@apollo/client';

export

    const LOGIN_USER = gq1`
        mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password){
        token
        profile {
        _id
        email
                }
            }
        }
        `

export const CREATE_USER = gq1`
mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
    token
    user {
    _id
    email
            }
        }
    }
    `;