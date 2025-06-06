'use client'

/* Commented for bypass */
// import { createClient } from '@/utils/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function HomeForm() {
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [emailSent, setEmailSent] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Set loading state for UI feedback
    setIsLoading(true)
    setError(null)

    try {
      // Basic validation - check for empty fields
      if (!websiteUrl.trim()) {
        throw new Error('Please enter a website URL')
      }

      if (!email.trim()) {
        throw new Error('Please enter your email address')
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address')
      }

      // Validate URL format - allow domains without http/https
      let processedUrl = websiteUrl.trim()

      // If URL doesn't start with http:// or https://, add https://
      if (!processedUrl.match(/^https?:\/\//)) {
        processedUrl = `https://${processedUrl}`
      }

      // Check if it's a valid URL/domain format
      if (
        !processedUrl.match(
          /^https?:\/\/[a-zA-Z0-9][-a-zA-Z0-9.]*\.[a-zA-Z]{2,}(?:\/.*)?$/
        )
      ) {
        throw new Error('Please enter a valid website URL or domain name')
      }

      // Call the API to create the audit record
      const response = await fetch('/api/audits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ websiteUrl: processedUrl, email }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to start analysis')
      }

      // API call was successful, proceed with UI update and redirect
      setEmailSent(true)
      setIsLoading(false)

      // After showing success message, redirect to login
      setTimeout(() => {
        router.push('/login?source=report_request')
      }, 2500) // Keep the delay as per current behaviour
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An unexpected error occurred'
      )
      setIsLoading(false)
    }
  }

  if (emailSent) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600 dark:text-green-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Analysis Started!</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          We&apos;re analyzing your website. Your report will be available in
          your dashboard. Redirecting you to sign in...
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="websiteUrl" className="block text-sm font-medium mb-1">
          Website URL <span className="text-red-500">*</span>
        </label>
        <Input
          id="websiteUrl"
          type="text"
          placeholder="example.com"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          required
        />
        <p className="mt-1 text-xs text-gray-500">
          Enter domain name (e.g., example.com) or full URL
        </p>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p className="mt-1 text-xs text-gray-500">
          Your email is used for account creation
        </p>
      </div>

      {error && (
        <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-sm">
          {error}
        </div>
      )}

      <Button
        type="submit"
        disabled={isLoading}
        loading={isLoading}
        className="w-full"
      >
        {isLoading ? 'Analyzing...' : 'Get My Score'}
      </Button>

      <p className="text-xs text-center text-gray-500 dark:text-gray-400">
        By submitting, you&apos;ll be redirected to create an account where you
        can access your report.
      </p>
    </form>
  )
}
