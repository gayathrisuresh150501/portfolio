import { useEffect, useState } from "react";

export function useTypewriter(phrases: string[], typingSpeed = 90, deletingSpeed = 40) {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = index % phrases.length;
        const fullText = phrases[current];

        if (!isDeleting && text === fullText) {
            const pause = setTimeout(() => setIsDeleting(true), 1000);
            return () => clearTimeout(pause);
        }

        if (isDeleting && text === "") {
            const pause = setTimeout(() => {
                setIsDeleting(false);
                setIndex((i) => i + 1);
            }, 400);
            return () => clearTimeout(pause);
        }

        const delta = isDeleting ? deletingSpeed : typingSpeed;
        const timer = setTimeout(() => {
            const next = isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1);
            setText(next);
        }, delta);

        return () => clearTimeout(timer);
    }, [text, isDeleting, index, phrases, typingSpeed, deletingSpeed]);

    return text;
}
