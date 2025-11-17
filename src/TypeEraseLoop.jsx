import { useState, useEffect } from "react";

export default function TypeEraseLoop() {
  const roles = ["Frontend Developer", "Mobile Developer", "Virtual Assistant"];
  const prefix = "and "; // keep this static
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(prefix + roles[0]);
  const [isDeleting, setIsDeleting] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const interval = setInterval(() => {
      const roleText = displayText.replace(prefix, ""); // remove the prefix to manipulate only the role

      if (isDeleting) {
        if (roleText.length > 0) {
          setDisplayText(prefix + roleText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
        }
      } else {
        if (roleText.length < currentRole.length) {
          setDisplayText(prefix + currentRole.slice(0, roleText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 800);
        }
      }
    }, 80);

    return () => clearInterval(interval);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <span className="block mt-2 font-medium">
      {displayText}
      <span className="inline-block w-1 ml-1 bg-white animate-blink">‎</span>
    </span>
  );
}
