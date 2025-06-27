import React from 'react'

export default function Footer() {
  return (
    <footer className=" py-4 text-center bg-blue-800 text-white shadow-md">
      <p>&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
    </footer>
  )
}
