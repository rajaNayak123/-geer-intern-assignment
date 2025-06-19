"use client"

import { useNotification } from "@/contexts/notification-context"
import { X, CheckCircle, XCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotificationContainer() {
  const { notifications, removeNotification } = useNotification()

  if (notifications.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`
            max-w-sm w-full bg-white rounded-lg shadow-lg border-l-4 p-4 animate-in slide-in-from-right-full
            ${notification.type === "success" ? "border-green-500" : ""}
            ${notification.type === "error" ? "border-red-500" : ""}
            ${notification.type === "info" ? "border-blue-500" : ""}
          `}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {notification.type === "success" && <CheckCircle className="h-5 w-5 text-green-500" />}
              {notification.type === "error" && <XCircle className="h-5 w-5 text-red-500" />}
              {notification.type === "info" && <Info className="h-5 w-5 text-blue-500" />}
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">{notification.title}</p>
              <p className="mt-1 text-sm text-gray-500">{notification.message}</p>
            </div>
            <div className="ml-4 flex-shrink-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeNotification(notification.id)}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
