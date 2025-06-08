import React, { useEffect } from 'react';

const StarEffect: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      console.log('ok')
      const star = document.createElement('div');
      star.className = 'star';
      document.body.appendChild(star);

      // マウス位置に星を配置
      const size = Math.random() * 10 + 5; // 星のサイズ
      const left = e.pageX - size / 2;
      const top = e.pageY - size / 2;

      // スタイルを動的に適用
      star.style.left = `${left}px`;
      star.style.top = `${top}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // アニメーションが終了したら星を削除
      setTimeout(() => {
        star.remove();
      }, 1000); // 1秒後に削除
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default StarEffect;
