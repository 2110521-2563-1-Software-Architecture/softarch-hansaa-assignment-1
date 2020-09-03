import React from "react"
import BookList from "../component/booklist"
import AddBox from "../component/AddBox";
class HomePage extends React.Component {
    render() {
        return (
            <div>
                <AddBox></AddBox>
                <BookList></BookList>
            </div>

        )
    }
}

export default HomePage;