import React from "react";
import { Mail, Linkedin, UserRound } from "lucide-react";

interface DirectorDetailsCardProps {
  name: string;
  role: string;
  description?: string;
  email?: string;
  linkedin?: string;
  image?: string;
}

export default function DirectorDetailsCard({
  name,
  role,
  description,
  email,
  linkedin,
  image,
}: DirectorDetailsCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-200/60 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="h-72 w-full bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-106"
          />
        ) : (
          <UserRound className="h-20 w-20 text-slate-400" />
        )}
      </div>

      <div className="p-5">
        <div className="mb-3">
          <h3 className="text-base font-semibold text-slate-900">{name}</h3>
          <p className="text-sm text-slate-500">{role}</p>
        </div>

        {description && (
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            {description}
          </p>
        )}

        <div className="flex items-center justify-between gap-3 text-xs text-slate-500">
          {email ? (
            <a href={`mailto:${email}`} className="flex items-center gap-1 truncate hover:text-slate-900">
              <Mail className="h-3.5 w-3.5" />
              <span className="truncate max-w-[160px]">{email}</span>
            </a>
          ) : <span />}

          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-700 hover:text-slate-900 font-medium"
            >
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
