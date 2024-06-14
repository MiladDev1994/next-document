"use client"

import { useEffect } from "react"

export default function Error ({
    error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  }) {

    
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])
    
    return (
        <div>
          <h2 className="text-5xl">Error</h2>
          <button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
            className="text-xl border border-red-600 bg-red-400 p-2 rounded-sm"
          >
            Try again
          </button>
        </div>
    )
}