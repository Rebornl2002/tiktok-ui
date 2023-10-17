import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '@/assets/images';
import styles from './Image.module.scss';

function Image({ src, className, fallback: customFallback = images.noImages, ...props }, ref) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
