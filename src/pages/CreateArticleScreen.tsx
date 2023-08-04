import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { useQuill } from "react-quilljs"
import "quill/dist/quill.snow.css"
import axios from "axios"
import { createArticle } from '../api/articleAPI'


const CreateArticleScreen = () => {
    const { quill, quillRef } = useQuill()
    const [title, setTitle] = useState<string>("")
    const [description, setDecription] = useState<string>("")
    const [content, setContent] = useState<string>("")
    const [category, setCategory] = useState<string>("");

    useEffect(() => {
        if (quill) {
            quill.on("text-change", () => {
                setContent(quillRef.current.firstChild.innerHTML)
            })
        }
    }, [quill])




    return (
        <div>
            <br />
            <br />
            <br />
            <center style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}  >
                <div style={{ display: "flex", flexDirection: "column" }} >
                    <Input
                        placeholder='Enter Article Title'
                        value={title}
                        onChange={(e: any) => {
                            setTitle(e.target.value)
                        }}
                    />
                    <Input
                        placeholder='Enter Article Description'
                        value={description}
                        onChange={(e: any) => {
                            setDecription(e.target.value)
                        }}
                    />
                    <Input
                        placeholder='Enter Article Category'
                        value={category}
                        onChange={(e: any) => {
                            setCategory(e.target.value)
                        }}
                    />

                </div>
                <br />
                <div style={{ width: "400px" }} >
                    <div
                        ref={quillRef}
                    />
                </div>
                <br />


                <Button
                    onClick={() => {
                        createArticle({ content, category, description, title })
                    }}
                >Publish</Button>
            </center>
            <br />
            <br />
            <br />

            {/* <div
                dangerouslySetInnerHTML={{ __html: content }}
            /> */}

            <div>{content}</div>
        </div>
    )
}

export default CreateArticleScreen


const Button = styled.div`
width: 300px;
height: 40px;
border-radius: 30px;
color: white;
background-color: black;
font-weight: 600;
font-size: 20px;
cursor: pointer;
text-decoration: none;

border-radius: 30px;
display: flex;
justify-content: center;
align-items: center;
`
const Input = styled.input`
width: 300px;
height: 40px;
border:1px solid silver;
outline: none;
margin: 5px;
padding-left: 10px;
`