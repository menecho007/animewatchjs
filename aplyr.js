const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: 'Mukanjyo',
            artist: 'Survive Said The Prophet',
            url: 'https://music.yolodev.workers.dev/1:/Music/song.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/mukanjyo_poster.jpg',
            lrc: 'https://files.catbox.moe/fyv5b2.lrc',
            theme: '#ebd0c2'
        },
        {
            name: 'Zen Zen Zense',
            artist: 'RADWIMPS',
            url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.mp3',
            cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg',
            lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.lrc',
            theme: '#505d6b'
        },
        {
            name: 'name2',
            artist: 'artist2',
            url: 'url2.mp3',
            cover: 'cover2.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        }
    ]
});

const ap_min = new APlayer({
    container: document.getElementById('aplayer-min'),
    lrcType: 3,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    fixed: true,
    audio: [{
        name: 'Mukanjyo',
        artist: 'Survive Said The Prophet',
        url: 'https://music.yolodev.workers.dev/1:/mukanjyo.mp3',
        cover: 'https://music.yolodev.workers.dev/1:/mukanjyo_poster.jpg',
        lrc: 'mukanjyo_lrycs.lrc',
        theme: '#ebd0c2'
    },
    {
        name: 'Zen Zen Zense',
        artist: 'RADWIMPS',
        url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.mp3',
        cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg',
        lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.lrc',
        theme: '#505d6b'
    },
    {
        name: 'name2',
        artist: 'artist2',
        url: 'url2.mp3',
        cover: 'cover2.jpg',
        lrc: 'lrc2.lrc',
        theme: '#46718b'
    }]
});

