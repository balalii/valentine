'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Component for asking if the user will be the Valentine.
 * Renders a message and buttons for user response.
 */
export default function Asking() {
  const [indexData, setIndexData] = useState<number>(0);
  const [sizeBtn, setSizeBtn] = useState<number>(1);

  // Array of messages to display when the user clicks on the buttons
  const messages = [
    'No',
    'Are you sure?',
    'Really Sure?',
    'Think again !',
    'Last change',
    'You might regret this!',
    'Give it another thought !',
    'Are you absolutely certain ?',
    'This could be a mistake!',
    `Don't be so cold!`,
    'Change of heart?',
    'Is that your final answer?',
    `You're breaking my heart ;(`,
  ];

  // Function to handle click on the second button
  const handleClick = () => {
    if (indexData < messages.length - 1) {
      setIndexData(indexData + 1);
    }
  };

  // Framer Motion variants for button animation
  const variants = {
    initial: { scale: 0 },
    animate: { scale: sizeBtn },
  };

  // Effect to increase button size on indexData change
  useEffect(() => {
    setSizeBtn(sizeBtn * 1.2);
  }, [indexData]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-20 space-y-10">
        {/* Bear image */}
        <Image src={'/bear-love.gif'} width={300} height={300} className="w-80 h-auto " alt="bear" />
        {/* Message */}
        <p className="text-xl lg:text-3xl font-medium text-center ">Will you be my Valentine ???</p>
        <div className={` flex flex-row items-start justify-start`} style={{ marginTop: `${sizeBtn * 1.6}rem` }}>
          {/* Yes button */}
          <Link href={'/yes'}>
            <motion.button className={`shadow cursor-pointer rounded-lg text-white pt-3.5 pb-3 px-8 bg-green-500`} whileTap={{ scale: sizeBtn / 2 }} whileHover="animate" variants={variants} animate={true ? 'animate' : 'initial'}>
              Yes
            </motion.button>
          </Link>
          {/* Conditional rendering of message buttons */}
          {indexData !== messages.length - 1 && (
            <motion.button
              onClick={handleClick}
              style={{ marginLeft: `${sizeBtn * 2.9}rem` }}
              className={` shadow cursor-pointer rounded-lg text-white pt-3.5 pb-3 px-5 bg-red-500 self-start`}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 * 1.2 }}
            >
              {messages[indexData]}{' '}
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
