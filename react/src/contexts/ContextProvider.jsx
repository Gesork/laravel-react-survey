import { Children, createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    surveys: [],
    setCurrentUser: () => { },
    setUserToken: () => {},
})

const tmpSurveys = [
    {
        "id" : 1,
        "title": "TheCodeholic Youtube channel",
        "slug": "thecodeholic-youtube-channel",
        "status": true,
        "description": "My name is Zura. <br>I am Web Developer with + years of experience, free educational contet creator, CTO, Lecturer and father of two wwonderful daughters.<br>",
        "created_at": "2022-01-07 13:23:41",
        "updated_at": "2022-01-18 16:34:19",
        "questions": [
            {
                "id": 15,
                "type": "text",
                "question": "From which country are you?",
                "description": null
            },
            {
                "id": 16,
                "type": "checkbox",
                "question": "Which language videos do you want to see on my channel",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorem iste, quaerat necessitatibus explicabo cumque soluta! Officia hic quo, sequi asperiores perferendis consequatur reprehenderit non praesentium laborum? Maiores, itaque distinctio."
            }
        ]
    }

]

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        name: 'Tom Cook',
        email: 'tom@example.com',
        imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    })
    const [userToken, setUserToken] = useState('1234');
    const [surveys, setSurveys] = useState(tmpSurveys)

    return(
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
            surveys,
        }}> 
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)