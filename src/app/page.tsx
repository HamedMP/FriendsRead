import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Search, DollarSign } from 'lucide-react';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-14 flex items-center'>
        <a className='flex items-center justify-center' href='#'>
          <BookOpen className='h-6 w-6' />
          <span className='ml-2 text-2xl font-bold'>Friends Read</span>
        </a>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <a
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            How It Works
          </a>
          <a
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            About Us
          </a>
          <a
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Contact
          </a>
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  Share Books, Share Stories
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                  Connect with friends, share your favorite books, and discover
                  new reads without spending a dime.
                </p>
              </div>
              <div className='space-x-4'>
                <Button>Download Now</Button>
                <Button variant='outline'>Browse Books</Button>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'>
              Tired of...
            </h2>
            <div className='grid gap-6 lg:grid-cols-3'>
              <Card>
                <CardContent className='flex flex-col items-center space-y-2 p-6'>
                  <DollarSign className='h-12 w-12 text-primary' />
                  <h3 className='text-xl font-bold'>
                    Spending on Single-Use Books?
                  </h3>
                  <p className='text-center text-gray-500 dark:text-gray-400'>
                    Stop buying books you'll only read once. Share and borrow
                    instead!
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='flex flex-col items-center space-y-2 p-6'>
                  <BookOpen className='h-12 w-12 text-primary' />
                  <h3 className='text-xl font-bold'>Lack of Shelf Space?</h3>
                  <p className='text-center text-gray-500 dark:text-gray-400'>
                    Free up your shelves by sharing books with friends.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='flex flex-col items-center space-y-2 p-6'>
                  <Search className='h-12 w-12 text-primary' />
                  <h3 className='text-xl font-bold'>
                    Missing Great Recommendations?
                  </h3>
                  <p className='text-center text-gray-500 dark:text-gray-400'>
                    Discover new reads through your friends' libraries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'>
              Why Friends Read?
            </h2>
            <div className='grid gap-6 lg:grid-cols-2'>
              <div className='flex flex-col space-y-2'>
                <h3 className='text-xl font-bold'>Share & Borrow</h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  Lend your books to friends and borrow theirs. Expand your
                  reading horizons without expanding your budget.
                </p>
              </div>
              <div className='flex flex-col space-y-2'>
                <h3 className='text-xl font-bold'>Discover New Reads</h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  Explore your friends' bookshelves and find hidden gems you
                  might have missed.
                </p>
              </div>
              <div className='flex flex-col space-y-2'>
                <h3 className='text-xl font-bold'>Save Money & Space</h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  Reduce your book expenses and declutter your space by sharing
                  resources with friends.
                </p>
              </div>
              <div className='flex flex-col space-y-2'>
                <h3 className='text-xl font-bold'>Connect Through Books</h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  Foster deeper connections with friends through shared reading
                  experiences and discussions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'>
              How It Works
            </h2>
            <div className='grid gap-6 lg:grid-cols-3'>
              <div className='flex flex-col items-center space-y-2 text-center'>
                <Users className='h-12 w-12 text-primary' />
                <h3 className='text-xl font-bold'>1. Connect with Friends</h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  Add your friends to your network and see their book
                  collections.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-2 text-center'>
                <BookOpen className='h-12 w-12 text-primary' />
                <h3 className='text-xl font-bold'>2. List Your Books</h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  Add the books you own and are willing to share to your digital
                  bookshelf.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-2 text-center'>
                <Search className='h-12 w-12 text-primary' />
                <h3 className='text-xl font-bold'>3. Browse & Borrow</h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  Explore your friends' libraries and request to borrow books
                  you're interested in.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Ready to Start Sharing?
                </h2>
                <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>
                  Join Friends Read today and revolutionize the way you read and
                  share books with your friends.
                </p>
              </div>
              <div className='space-x-4'>
                <Button size='lg'>Download Now</Button>
                <Button size='lg' variant='outline'>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © 2023 Friends Read. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <a className='text-xs hover:underline underline-offset-4' href='#'>
            Terms of Service
          </a>
          <a className='text-xs hover:underline underline-offset-4' href='#'>
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
