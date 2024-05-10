'use client';
import { useState } from 'react'; // Import useState hook
import Image from 'next/image';

export default function NavBar({ router, expanded }) {
    

    // Function to handle click event and toggle expansion
    function GoToPage(a) {
        router.push(a);
        console.log('going to: %s', a);
    }

    return (
        <div className={`navBar ${expanded ? 'expanded' : ''}`}> {/* Apply expanded class if expanded is true */}
            <div className='navBarContainer'>
                <button className='navBarButton' onClick={() => GoToPage("/")} type="button">
                    <Image src="/home.png" width={50} height={50} alt="Home" />
                    <h2 className="navBarLabel">Home</h2>
                </button>
            </div>
            <div className='navBarContainer'>
                <button className='navBarButton' onClick={() => GoToPage("/search")}>
                    <Image src="/search.png" width={50} height={50} alt="Search" />
                    <h2 className="navBarLabel">Search</h2>
                </button>
            </div>
            <div className='navBarContainer'>
                <button className='navBarButton' onClick={() => GoToPage("")}>
                    <Image src="/account.png" width={50} height={50} alt="Account" />
                    <h2 className="navBarLabel">Account</h2>
                </button>
            </div>
        </div>
    );
}
