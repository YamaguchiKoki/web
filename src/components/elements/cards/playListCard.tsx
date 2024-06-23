import styles from '@/styles/animation.module.css'
import clsx from 'clsx'
import Image from 'next/image'

export function PlayListCard() {
  return (
    <div className="flex w-80 p-4 bg-white rounded-lg shadow-md transform hover:bg-zinc-100 transition-transform duration-300 ease-in-out">
      <Image
        className={clsx('w-full h-40 object-cover rounded-t-lg', styles.reveal)}
        alt="Card Image"
        src="https://via.placeholder.com/150"
        width={100}
        height={100}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">Beautiful Card</h2>
        {/* <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
          ante sit amet tellus ornare tincidunt.
        </p> */}
      </div>
    </div>
  )
}
