import * as React from "react"

import { Button } from "@/components/ui/button"

import "./globals.css"

export default function Page() {
  return (
    <React.Fragment>
      <h1>Hello world!</h1>
      <Button variant="destructive">Hello, This is a Button!</Button>
    </React.Fragment>
  )
}
