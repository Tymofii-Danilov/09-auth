import Image from "next/image";
import css from "./ProfilePage.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NoteHub Profile",
  description:
    "NoteHub is a simple and efficient application designed for managing personal notes. The app provides a clean interface for writing, editing, and browsing notes, with support for keyword search and structured organization.",
  openGraph: {
    title: "NoteHub Profile",
    description:
      "NoteHub is a simple and efficient application designed for managing personal notes. The app provides a clean interface for writing, editing, and browsing notes, with support for keyword search and structured organization.",
    url: "",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Notehub",
      },
    ],
  },
};

export default function Profile() {
  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <a href="" className={css.editProfileButton}>
            Edit Profile
          </a>
        </div>
        <div className={css.avatarWrapper}>
          <Image
            src="/public/notehub-og-meta.jpg"
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>
        <div className={css.profileInfo}>
          <p>Username: your_username</p>
          <p>Email: your_email@example.com</p>
        </div>
      </div>
    </main>
  );
}
