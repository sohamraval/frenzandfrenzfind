export default interface Sound {
    isPlaying: boolean;
    src: string;
    ended: boolean;
    paused: boolean;
    loop: boolean;
    volume: number;
}