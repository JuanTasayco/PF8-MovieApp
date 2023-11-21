import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

interface Ball {
  x: number;
  y: number;
  radius: number;
  blurAmount: number;
}

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss',
})
export class CanvasComponent implements AfterViewInit {
  private ctx!: CanvasRenderingContext2D;
  private balls: Ball[] = [];
  @ViewChild('canvas') elementCanvas!: ElementRef;
  ngAfterViewInit(): void {
    this.animationCanvas();
  }

  animationCanvas() {
    this.ctx = this.elementCanvas.nativeElement.getContext('2d');
    this.createInitialBalls();
    this.animate();
    this.moveBallsOffscreen();
  }

  createBall(): void {
    const ball = {
      x: Math.random() * this.ctx.canvas.width,
      y: Math.random() * this.ctx.canvas.height,
      radius: Math.random() * 20 + 10,
      blurAmount: Math.random() * 10,
    };
    this.balls.push(ball);
  }

  createInitialBalls(): void {
    for (let i = 0; i < 10; i++) {
      this.createBall();
    }
  }

  drawBlurredBall(
    x: number,
    y: number,
    radius: number,
    blurAmount: number
  ): void {
    this.ctx.filter = `blur(${blurAmount}px)`;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.fillStyle = 'rgba(12,67,162,0.5)';
    this.ctx.fill();
    this.ctx.filter = 'none';
  }

  animate(): void {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    for (const ball of this.balls) {
      ball.x += Math.random() - 0.5;
      ball.y += Math.random() - 0.5;

      if (ball.x < 0) ball.x = this.ctx.canvas.width;
      if (ball.x > this.ctx.canvas.width) ball.x = 0;
      if (ball.y < 0) ball.y = this.ctx.canvas.height;
      if (ball.y > this.ctx.canvas.height) ball.y = 0;

      this.drawBlurredBall(ball.x, ball.y, ball.radius, ball.blurAmount);
    }

    requestAnimationFrame(() => this.animate());
  }

  moveBallsOffscreen() {
    gsap.from(this.balls, {
      duration: 3, // Duración de la animación
      x: window.innerWidth + 100, // Mover las bolas fuera de la pantalla en el eje X
      y: () => Math.random() * window.innerHeight, // Posición aleatoria en el eje Y
      stagger: 0.2, // Espaciado entre cada bola
      onComplete: () => this.stopBalls(), // Una vez que termina la animación, detener las bolas
    });
  }

  stopBalls(): void {
    gsap.killTweensOf(this.balls);
    this.animate();
  }
}
