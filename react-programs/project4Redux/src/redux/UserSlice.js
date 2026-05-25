let initialUser= localStorage.getItem("user") || null

const userSlice=createSlice(
    {
        name:"user",
        initialState:initialUser,
        reducers : {
            login:(state,action)=>{
                localStorage.setItem("user",action.payload)
                return action.payload
            },
            logout:(state)=>{
                sessionStorage.removeItem("user")
                return null
            }
        }
    }
);

export const {login,logout}=userSlice.actions
export default userSlice.reducer



//login("Alice")