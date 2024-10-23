import Link from 'next/link';
import Image from 'next/image';
import XIcon from '../../public/images/x.svg';
import FacebookIcon from '@/public/images/facebook.svg';
import InstagramIcon from '@/public/images/instagram.svg';
import LinkdlnIcon from '@/public/images/linkdln.svg';
import LogoIcon from '@/public/images/footerlogo.svg';
import YoutubeIcon from '@/public/images/youtube.svg';

export default function Footer() {
    return (
        <footer className="bg-white text-black py-12 w-full bottom-0 left-0">
            <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8 px-6">
                
                {/* Logo and Contact Info */}
                <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                        <Link href="#">
                            <Image src={LogoIcon} alt="Logo" width={60} height={40} className="w-24 h-auto" />
                        </Link>
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <Link href="#" className="text-[#F43900]">
                            <Image src={XIcon} alt="Xing" width={24} height={24} className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="text-[#F43900]">
                            <Image src={FacebookIcon} alt="Facebook" width={24} height={24} className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="text-[#F43900]">
                            <Image src={InstagramIcon} alt="Instagram" width={24} height={24} className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="text-[#F43900]">
                            <Image src={LinkdlnIcon} alt="LinkedIn" width={24} height={24} className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="text-[#F43900]">
                            <Image src={YoutubeIcon} alt="YouTube" width={24} height={24} className="w-6 h-6" />
                        </Link>
                    </div>
                    <p>0116 262 6556</p>
                    <p>contact@athenacb.co.uk</p>
                    <p>Queen Street</p>
                    <p>Leicester, LE1 1QD</p>
                </div>

                {/* Athena Links */}
                <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4">Athena</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#" className="hover:text-orange-600">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-orange-600">
                                History
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-orange-600">
                                Room Layout
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Venue Hire Links */}
                <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4">Venue Hire</h3>
                    <div className="flex flex-wrap">
                        <div className="w-1/2 xl:w-1/3 mb-2">
                            <Link href="#" className="hover:text-orange-600">
                                Dinners
                            </Link>
                        </div>
                        <div className="w-1/2 xl:w-1/3 mb-2">
                            <Link href="#" className="hover:text-orange-600">
                                Concerts
                            </Link>
                        </div>
                        <div className="w-1/2 xl:w-1/3 mb-2">
                            <Link href="#" className="hover:text-orange-600 whitespace-nowrap">
                                Sporting Events
                            </Link>
                        </div>
                        <div className="w-1/2 xl:w-1/3 mb-2">
                            <Link href="#" className="hover:text-orange-600">
                                Conferences
                            </Link>
                        </div>
                        <div className="w-1/2 xl:w-1/3 mb-2">
                            <Link href="#" className="hover:text-orange-600">
                                Shows
                            </Link>
                        </div>
                        <div className="w-1/2 xl:w-1/3 mb-2">
                            <Link href="#" className="hover:text-orange-600 xl:whitespace-nowrap">
                                Exhibitions & Festivals
                            </Link>
                        </div>
                        <div className="w-1/2 xl:w-1/3 mb-2">
                            <Link href="#" className="hover:text-orange-600">
                                Weddings
                            </Link>
                        </div>
                        <div className="w-1/2 xl:w-1/3 mb-2">
                            <Link href="#" className="hover:text-orange-600">
                                Christmas
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
