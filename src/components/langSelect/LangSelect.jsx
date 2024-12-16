import React from 'react';
import style from './langSelect.module.scss';
import { Button, MenuItem, Menu, Fade } from '@mui/material';
import { LANGUAGE_MENU } from '../../constants/index.js';

const languages = Object.entries(LANGUAGE_MENU);

export const LangSelect = ({ language, onSelect }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={style.wrapper}>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {language}
            </Button>
            <Menu
                className={style.customMenu}
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                {languages.map(([lang, version], index) => (
                    <MenuItem
                        key={index}
                        onClick={() => {
                            onSelect(lang);
                            handleClose();
                        }}
                        sx={{
                            width: '250px',
                            backgroundColor: lang === language ? '#f0f0f0' : 'transparent',
                            color: lang === language ? '#1976d2' : 'inherit',
                            '&:hover': {
                                backgroundColor: lang === language ? '#e0e0e0' : '#f5f5f5',
                            },
                        }}
                    >
                        <div className={style.languageItem}>
                            <div className={style.content}>
                                <span className={style.languageName}>{lang}</span>
                                <span className={style.languageVersion}>{version}</span>
                            </div>
                        </div>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};
