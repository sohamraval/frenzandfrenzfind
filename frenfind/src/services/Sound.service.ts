import Sound from "../interfaces/Sound.interface";

export default class SoundService {

    private sound: Sound;
    private audio: HTMLAudioElement = new Audio();
    private isPlaying: boolean = false;

    constructor(sound?: Sound) {
        this.sound = sound || {
            isPlaying: false,
            src: "",
            ended: false,
            paused: false,
            loop: false,
            volume: 1
        };
    }

    public setSound(sound: Sound) {
        this.sound = sound;
    }

    public playSound() {

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

    public pauseSound() {
        this.audio.pause();
        this.isPlaying = false;
        this.sound.paused = true;
    }

    public stopSound() {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
        this.sound.isPlaying = false;
    }

}