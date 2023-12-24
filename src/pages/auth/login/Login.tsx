"use client"
import { useEffect } from "react"
export default function Login() {
    useEffect(() => {
        fetch("http://localhost:4000").then((res) => res.json()).then((data) => console.log(data))
    }, [])

    return <>
        well fuck
    </>

}