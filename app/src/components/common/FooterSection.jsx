import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function FooterSection() {
  return (
    <div className="flex flex-col items-center gap-4 py-4">
      <div className="flex justify-center flex-row gap-3">
        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/github-icon.svg" alt="GitHub" width={32} height={32} />
        </Link>

        <Link href="https://www.linkedin.com/in/okasha-masood-21427a279/" target="_blank" rel="noopener noreferrer">
          <Image src="/images/linkedin-icon.svg" alt="LinkedIn" width={32} height={32} />
        </Link>
      </div>

      <div>
        <p className="text-sm text-gray-500">Copyright ©2025 All rights reserved</p>
      </div>
    </div>
  );
}

export default FooterSection;
