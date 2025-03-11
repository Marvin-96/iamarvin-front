import React, { useState, useEffect } from 'react';
import { themeSwitcherWrapper } from './themeSwitcher.module.scss';
import NightIcon from '@/public/moon.svg';
import DaysIcon from '@/public/sunny-day.svg';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('day-theme'); // État pour le thème

  useEffect(() => {
    // Vérifie si un thème est déjà stocké dans le localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    // Applique la classe au body
    document.body.className = theme;
  }, [theme]); // S'exécute à chaque changement de `theme`

  const toggleTheme = () => {
    const newTheme = theme === 'day-theme' ? 'night-theme' : 'day-theme';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Sauvegarde le thème
  };

  return (
    <div className={themeSwitcherWrapper}>
      <button onClick={toggleTheme} className={theme} id="themeSwitcher">
        {/* Affiche l'icône de jour seulement en mode "day-theme" */}
        <DaysIcon style={{ display: theme === 'day-theme' ? 'block' : 'none' }} width={20} height={20} />
        {/* Affiche l'icône de nuit seulement en mode "night-theme" */}
        <NightIcon style={{ display: theme === 'night-theme' ? 'block' : 'none' }} width={20} height={20} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
