import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      className="border rounded px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      ☀︎ / ☾
    </button>
  );
}
