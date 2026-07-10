/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";

import type { GithubUser } from "@/lib/github";
import ConsoleAnimation from "./console-animation";
import SocialLinks from "./social-links";

export default function UserCard({ user }: { user: GithubUser }) {
  const createdAt = user.created_at
    ? new Date(user.created_at).getFullYear()
    : new Date().getFullYear();
  const yearsExp = new Date().getFullYear() - createdAt;

  return (
    <div className="rounded-xl bg-panel">
      <div className="flex flex-col items-center gap-6 p-6 lg:flex-row">
        {user.avatar_url ? (
          <img
            src={user.avatar_url}
            alt="Foto de perfil no GitHub"
            className="w-full max-w-64 rounded-xl"
          />
        ) : null}
        <div className="flex w-full flex-col gap-2">
          <h3 className="font-display text-2xl font-bold">{user.name}</h3>
          <p className="text-muted">{user.company}</p>
          <p className="text-muted">{user.bio}</p>
          <div className="mt-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <span className="flex items-center gap-1 text-sm">
              <HiOutlineLocationMarker size={20} />
              {user.location}
              <Image
                src="/brasil.png"
                alt="Bandeira do Brasil"
                width={18}
                height={13}
                className="h-auto w-[18px]"
              />
            </span>
            <span className="text-primary-light">{`+${yearsExp} anos de experiência`}</span>
          </div>
        </div>
      </div>

      <div className="hidden items-center justify-center gap-6 pb-6 lg:flex">
        <ConsoleAnimation />
        <SocialLinks />
      </div>
    </div>
  );
}
