"use client"

import { Button } from "@/components/ui/button"
import { MessageSquareText, BookA, Mic, Volume2 } from "lucide-react"

interface ContainerProps {
  placeholderText?: string
  definitionText?: string
  onRecord?: () => void
  onMessageSquare?: () => void
  onBook?: () => void
  onVolume?: () => void
}

const leftButtons = [
  { icon: MessageSquareText, ariaLabel: "Message" },
  { icon: BookA, ariaLabel: "Dictionary" }
]

export default function Voice({
  placeholderText = "no voice input...",
  definitionText = "Definition: a male child from birth to adulthood",
  onRecord,
  onMessageSquare,
  onBook,
  onVolume
}: ContainerProps) {
  const buttonHandlers = [onMessageSquare, onBook]

  return (
    <div className="flex flex-col rounded-lg border border-input bg-secondary">
      <div className="flex flex-col gap-2.5 rounded-b-lg border border-input bg-background p-3">
        <p className="text-center text-xl text-muted-foreground">
          {placeholderText}
        </p>
        
        <div className="relative flex items-center">
          <div className="flex gap-2 items-center">
            {leftButtons.map((btn, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="rounded-full"
                aria-label={btn.ariaLabel}
                onClick={buttonHandlers[index]}
              >
                <btn.icon />
              </Button>
            ))}
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2">
            <Button className="rounded-full" onClick={onRecord}>
              <Mic />
              Record
            </Button>
          </div>
          
          <div className="ml-auto flex min-w-20 items-center justify-end">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Volume"
              onClick={onVolume}
            >
              <Volume2 />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center p-3">
        <p className="text-sm text-muted-foreground">{definitionText}</p>
      </div>
    </div>
  )
}
