"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SoundService {
    constructor(sound) {
        this.audio = new Audio();
        this.isPlaying = false;
        this.sound = sound || {
            isPlaying: false,
            src: "",
            ended: false,
            paused: false,
            loop: false,
            volume: 1
        };
    }
    setSound(sound) {
        this.sound = sound;
    }
    playSound() {
        if (this.isPlaying && !this.sound.loop) {
            this.audio.pause();
            this.audio.currentTime = 0;
            this.isPlaying = false;
        }
        this.audio.src = this.sound.src;
        this.audio.loop = this.sound.loop;
        this.audio.volume = this.sound.volume;
        this.audio.play();
        this.isPlaying = true;
        this.sound.isPlaying = true;
    }
    pauseSound() {
        this.audio.pause();
        this.isPlaying = false;
        this.sound.paused = true;
    }
    stopSound() {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
        this.sound.isPlaying = false;
    }
}
exports.default = SoundService;
//# sourceMappingURL=Sound.service.js.map