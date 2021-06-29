import React from "react";
import { MainContainer } from "./styled";
import PostList from "../../components/PostList";

export default function Home() {
    return (
        <MainContainer>
            <PostList />
        </MainContainer>
    );
}
