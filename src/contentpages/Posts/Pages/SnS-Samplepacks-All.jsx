import HenkimaailmaPage from "../../../components/HenkimaailmaPage";
import { parseDate } from "../../../components/functions";
import React from "react";
import { NavLink } from "react-router-dom";

export function SnSSamplepacksAll({snspacks}) {
    return <SnSListing data={snspacks}/>
}

/*
const SnSData = {
    Changelog : [
        {
            "Date": new Date("2024-09-23T16:00:00Z"),
            "Contents" : [
                "Created new aggregate page to allow for easy updating and searching of samplepack contents",
                "Added 82 new sounds to SnS 1 - Things",
                "Added 11 new ambient tracks to SnS 2 - Places",
                "Added new: Sns 5 - Mbira sampler",
                "Added new: Sns 6 - Ragged Xylopiano sampler",
                "Added new: SnS 7 - Percussion loops and chops",
                "Added new: SnS 8 - Cymbal samples",
                "Added new: Sns 9 - Melodica sampler",
                "Added new: SnS 10 - Cajon sampler"
            ]
        }
    ],
    Packs : [
        {
            Name : "Sounds and Scapes 1 - Things",
            DownloadLink : "https://drive.google.com/file/d/1BUTLX_d1qYsQ_xOmr4u_Tl07SswXuS_8/view?usp=sharing",
            Img : "https://i.imgur.com/q8C1mBU.png",
            Date: new Date("2023-04-03T16:00:00Z"),
            UpDated: new Date("2024-09-23T16:00:00Z"),
            Desc: "Uncategorized sounds and sound effects. Clay to be molded for sound design.",
            Licence: "CC0",
            FileListing : ["Aggressive Mouse Clicking.wav","Ahhh.wav","Alien chirping.wav","Applause, light, oudoors.wav","Applause, loose, sarcastic.wav","Beer can + sip 2.wav","Beer can + sip.wav","Beer can 1.wav","Beer can 2.wav","Bite 1.wav","Bite 2.wav","Blip 1.wav","Blip 2.wav","Blip 3.wav","Blip 4.wav","Blip 5.wav","Bottle, squeaky.wav","Broken Car Radio Booming Long.wav","Brushes.wav","Button, denial.wav","Button, yes.wav","Car Passing By Doppler Dirt Road.wav","Car passing by Doppler Highway.wav","Cat Eating Wet Food.wav","Cat Growl 1.wav","Cat Growl 2.wav","Cat meowing raspy.wav","Cat Purring.wav","Cat Shudder 1.wav","Cat waking up.wav","Cat Yowl 1.wav","Cat Yowl 2.wav","Cat Yowl 3.wav","Cat Yowl 4.wav","Cat Yowl 5.wav","Cat Yowl Distant.wav","Champagne cork pop.wav","Champagne.wav","Chestnuts.wav","Cigarette Drag + Ambiance.wav","Clack 1.wav","Clank.wav","Click 1.wav","Click 2.wav","Closing Container 1.wav","Closing Container 2.wav","Closing Container 3.wav","Container thud.wav","Container.wav","Crack 1.wav","Crack 2.wav","Crack 3.wav","Crack 4.wav","Creaky Door 1.wav","Creaky Door 2.wav","Creaky Door 3.wav","Creaky Door Shut.wav","Diabolic Laughter SFX.wav","Digital Noise.wav","Distant Shot 2.wav","Distant Shot 3.wav","Distant Shot 4.wav","Distant Shot.wav","Dogs Barking In The Night.wav","Door Shut 2.wav","Door shut.wav","Door, light, with latch (1).wav","Door, light, with latch (2).wav","Door, light, with latch (3).wav","Door, mechanical.wav","Door, squeaky hinge.wav","Drink Pouring.wav","Feedback noises.wav","Fidget Spinner slow stop.wav","Fidget Spinner.wav","Fire burning loop.wav","Firewood, handling and clanking.wav","Flu mucus blow.wav","Footsteps Dirt Road 1.wav","Footsteps Grass.wav","Footsteps Gravel 1.wav","Footsteps Gravel 2.wav","Footsteps Gravel 3.wav","Footsteps Snow 1.wav","Footsteps snow.wav","Footsteps stone floor.wav","Gas pressure escaping.wav","Glass Breaking.wav","Glass clonk 2.wav","Glass clonk.wav","Insane laughter (clipping).wav","Keys 1.wav","Knife blades against one another.wav","Knife, Chopping.wav","Lighter.wav","Lock Open 1.wav","Lock Open 2.wav","Man Struggle.wav","Manic laughter.wav","Marker on paper.wav","Mbira Chord.wav","Metal Click.wav","Metal Clonk Ringing.wav","Metal object dragging.wav","Metal rolling 1.wav","Metal rolling 2.wav","Metallic Clank 1.wav","Metallic Clank 2.wav","Metallic Clank 3.wav","Metallic Clank 4.wav","Metallic Clink 1.wav","Metallic Clink 2.wav","Metallic Clink 3.wav","Metallic Clink 4.wav","Metallic Shuffling.wav","Metallic Wheel Spinning.wav","Muffled Scream.wav","Needle Drop Analogue 1.wav","Needle Drop Analogue 2.wav","Needle Drop Analogue 3.wav","Needle Drop Analogue 4.wav","Oil sizzling.WAV","Paper 1.wav","Paper page turn 1.wav","Paper page turn 2.wav","Paper page turn 3.wav","Paper rip 1.wav","Paper rip 2.wav","Paper rip 3.wav","Paper rip 4.wav","Paper rustling 1.wav","Paper Rustling 2.wav","Paper rustling 3.wav","Paper rustling long.wav","Pebbles into a pond.wav","Pebbles on wooden bench.wav","Pencil on paper.wav","Pewww pewww.wav","Pistachio shells.wav","Police Car Doppler 1.mp3","Police Car Doppler 2.mp3","Sabre 1.wav","Scooter passing by Doppler sreeching wheel.wav","Scream 1.wav","Shaving Cream.wav","Sink Washing Hands 1.wav","Snare drum mat latching.wav","Snoring lightly.wav","Squeaky office chair.wav","Subway Train.wav","Sweep - Heavy rain static.wav","Synth Growl 1.wav","Synth Ominous hum 1.wav","Synth Ominous hum 2.wav","Tape Recorder Slosh 1.wav","Train Passing By.wav","Trampoline boing (jaw harp).wav","Trinket drop.wav","Typing 1.wav","Typing 2.wav","Utterance Man 1.wav","Utterance Man 2.wav","Utterance Man 3.wav","Utterance Quoaik.wav","Utterance Slurp.wav","Veggie Crunch.wav","Veggie Snap, stale.wav","Veggie Snap.wav","Vinyl Crackle Analogue 1.wav","Vinyl Crackle Analogue 2.wav","Washmachine Cresc 3.wav","Washmachine Crescendo 1.wav","Washmachine Crescendo 2.wav","Washmachine Cycles.wav","Water carbonator.wav","Water flowing in pipes loop.wav","Water flowing in pipes loop2.wav","Water rumbling mechanical drain.wav","Wet Crunch 1.wav","Wet Crunch 2.wav","Wet Crunch 3.wav","Wet Crunch 4.wav","Wet Crunch 5.wav","Wet Crunch 6.wav","Whooshes.wav","Wine cork.wav","Wine pouring.wav","Wooden rattling stereo.wav","Woosh short.wav","Yaaahooo long.wav","Yeaah-hah-hah.wav","Zipper, bag.wav"
            ]
        },
        {
            Name : "Sounds and Scapes 2 - Places",
            DownloadLink : "https://drive.google.com/file/d/14hcA1vm9oAYCDzHr6_Q74eJIzBmTXpN3/view?usp=sharing",
            Img : "https://i.imgur.com/Dejmoaw.png",
            Date: new Date("2023-04-03T16:00:00Z"),
            UpDated: new Date("2024-09-23T16:00:00Z"),
            Desc: "Longer, loopable ambient sounds to be used in sound design.",
            Licence: "CC0",
            FileListing : ["Birdsong swallow loop.wav","Bus ride.wav","City Park.wav","Escalator 1 hum loop.wav","Escalator 2 chugging 95bpm.wav","Lakefront waves.wav","New Years' Rockets.wav","Night Near A River.wav","Nightly Birdlife.wav","Rain pattering loop.wav","Rapids Near.wav","Rotating fan loop.wav","Rural Nighttime with Mosquitoes.wav","Sauna fireplace loop.wav","Subway station loop (no trains).wav","Tram ride.wav","Water Mechanism hum loop.wav","Windy city ambiance loop.wav",
            ]
        },
        {
            Name : "Sounds and Scapes 3 - Instruments",
            DownloadLink : "https://drive.google.com/file/d/13m7kzDSzxv4J1LDR2dQHgRIoSkvXygMC/view?usp=sharing",
            Img:"https://i.imgur.com/btgav3Y.png",
            Date: new Date("2023-04-03T16:00:00Z"),
            Desc: "Miscellaneous instrument samples from a rock recording session circa 2012.",
            Licence:"CC0",
            FileListing : ["BDrum Soundcheck.wav","Crashes soundcheck.wav","Hats soundcheck.wav","Light snares.wav","Ride roll.wav","Ride soundcheck.wav","Snare Soundcheck.wav","SnareD Soundcheck.wav","Toms soundcheck 2.wav","Toms soundcheck.wav","Drum break 1.wav","Drum break 2.wav","Drum break 3.wav","Drum break 4.wav","Drum break 5.wav","Drum break 5alt.wav","FHorn 1.wav","FHorn 10.wav","FHorn 11.wav","FHorn 12.wav","FHorn 13.wav","FHorn 14.wav","FHorn 15.wav","FHorn 16.wav","FHorn 17.wav","FHorn 18.wav","FHorn 18b.wav","FHorn 19.wav","FHorn 2.wav","FHorn 3.wav","FHorn 4.wav","FHorn 5.wav","FHorn 7.wav","FHorn 8.wav","FHorn 9.wav","FHorn Atonal Madness.wav","Keyb 1.wav","Keyb 2.wav","Keyb 3.wav","Keyb Nord 3#01.aif","Keyb Nord 3#12.aif","Keyb Nord 3#16.aif","Keyb Nord 5#01.aif","Keyb Nord Organ#01.aif","Organ 1.wav","Organ 2.wav","Organ 3.wav","Organ 4.wav","Organ 5.wav","Rhodes 1.wav","Rhodes 2.wav","Rhodes 3.wav","Rhodes 4.wav","Rhodes 4.wav.asd","Strings 1.wav","Synth 1.wav","Synth 1b.wav","Synth 2.wav","Synth 3.wav","Synth 4.wav","Synth 5.wav","Synth lead 1.wav","Synth lead 2.wav","Sax 1.wav","Sax 10.wav","Sax 11.wav","Sax 12.wav","Sax 13.wav","Sax 14.wav","Sax 15.wav","Sax 16.wav","Sax 16b.wav","Sax 17.wav","Sax 18.wav","Sax 19.wav","Sax 1b.wav","Sax 1c.wav","Sax 2.wav","Sax 20.wav","Sax 21.wav","Sax 22a.wav","Sax 22b.wav","Sax 23.wav","Sax 24a.wav","Sax 24b.wav","Sax 25.wav","Sax 26.wav","Sax 27.wav","Sax 28.wav","Sax 3.wav","Sax 4.wav","Sax 5.wav","Sax 6.wav","Sax 7.wav","Sax 8.wav","Sax 9.wav","Sax Atonal Madness 1.wav","Sax Atonal Madness 2.wav","Sax Atonal Madness 3.wav","Sax improvisation 1.aif","Sax Improvisation 2.aif","Sax improvisation 3.aif","Sax percussive 1.wav","Sax percussive 10.wav","Sax percussive 11.wav","Sax percussive 12.wav","Sax percussive 13.wav","Sax percussive 14.wav","Sax percussive 14b.wav","Sax percussive 14c.wav","Sax Percussive 15.wav","Sax Percussive 15b.wav","Sax percussive 15c.wav","Sax percussive 16.wav","Sax percussive 17.wav","Sax percussive 17b.wav","Sax percussive 18.wav","Sax percussive 2.wav","Sax percussive 3.wav","Sax percussive 4.wav","Sax percussive 5.wav","Sax percussive 6.wav","Sax percussive 7.wav","Sax percussive 8.wav","Sax percussive 9.wav","Sax riff 1a.wav","Sax riff 1b.wav","Sax riff 1c.wav","Sax riff 2a.wav","Sax riff 2b.wav","Sax solo 1.wav","Sax solo 2.wav",]
        },
        {
            Name : "Sounds and Scapes 4 - Drumkit oneshots",
            DownloadLink : "https://drive.google.com/file/d/1jy_He9Vo04uRZiPWD6fDmenIrXM4x7wZ/view?usp=sharing",
            Img:"https://i.imgur.com/Hf5yoZd.png",
            Date: new Date("2023-08-26T16:00:00Z"),
            Desc: "Single drum hit recordings performed by drummer Vilho Talvela. Intended for sampling.",
            Licence:"CC0",
            AltName : "Sounds and Scapes 4b - Ableton Live drumrack",
            AltDownloadLink : "https://drive.google.com/file/d/1pn0CufwO2q_lAl4POa10y7DTZ-oO6NAG/view?usp=sharing",
            AltImg : "https://i.imgur.com/Aobuv1t.png",
            FileListing: ["Bdrum f.wav","Bdrum ff.wav","Bdrum mf.wav","Bdrum p 2.wav","Bdrum pp 1.wav","China f.wav","China mf.wav","Crash 1 p.wav","Crash1 f.wav","Crash1 mf.wav","Crash1 mp.wav","Crash2 f.wav","Crash2 mf.wav","Crash2 p.wav","Hat bell p.wav","Hat f.wav","Hat f2.wav","Hat f3.wav","Hat halfop f1.wav","Hat halfop ff.wav","Hat halfop mf.wav","Hat halfop mf3.wav","Hat halfop short mf.wav","Hat halfop short mf2.wav","Hat open f.wav","Hat open f2.wav","Hat open f3.wav","Hat open long ff.wav","Hat open mf.wav","Hat open p.wav","Hat p.wav","Hat Pedal f.wav","Hat Pedal f2.wav","Hat Pedal f3.wav","Hat pedal open f.wav","Hat pedal open f2.wav","Hat pedal open f3.wav","Hat pedal p.wav","Hat pp.wav","Ride 2 alt bell mf.wav","Ride 2 bell f long.wav","Ride 2 drive f.wav","Ride 2 f long.wav","Ride bell f.wav","Ride bell mp.wav","Ride bell p.wav","Ride drive p.wav","Ride mf 2.wav","Ride mf.wav","Ride p 2.wav","Ride p.wav","Ride short mp 2.wav","Ride short mp.wav","Snare demp f.wav","Snare f.wav","Snare ghost roll.wav","Snare mf.wav","Snare mp.wav","Snare p.wav","Snare ringing f.wav","Snare ringing mf.wav","Snare ringing mp.wav","Snare ringing p.wav","Snare roll diminuendo 1.wav","Snare roll long.wav","Tom floor f.wav","Tom floor f2.wav","Tom floor ff.wav","Tom floor p.wav","Tom floor roll cresc f.wav","Tom floor roll cresc p.wav","Tom floor roll dimin f.wav","Tom floor roll dimin p.wav","Tom hi f.wav","Tom hi ff.wav","Tom hi mf.wav","Tom hi p.wav","Tom hi pp.wav","Tom hi ppp.wav","Tom hi ppp2.wav","Tom hi roll ff.wav","Tom hi roll mp.wav","Tom hi roll ppp.wav",
            ]
        },
        {
            Name : "Sounds and Scapes 5 - Mbira sampler",
            DownloadLink : "https://drive.google.com/file/d/1u_LYRbJtu6M8YpXUbFfwZ_QG-dwSskAc/view?usp=sharing",
            Img:"https://i.imgur.com/sSTiIyM.png",
            Date: new Date("2023-09-23T16:00:00Z"),
            Desc: "An ableton sampler and a recording of notes played on a Mbira.",
            Licence:"CC0",
            FileListing: [
                "Mbira notes.wav",
            ]
        },
        {
            Name : "Sounds and Scapes 6 - Ragged Xylopiano sampler",
            DownloadLink : "https://drive.google.com/file/d/1e3tsYS-gxWGQX22VmBUWUdakf_usSXJG/view?usp=sharing",
            Img:"https://i.imgur.com/MerYt0q.png",
            Date: new Date("2023-09-23T16:00:00Z"),
            Desc: "An ableton sampler and recordings of a toy xylopiano with an interestingly haunting and crummy sound.",
            Licence:"CC0",
            FileListing: [
                "Ragged Xylopiano notes alt.wav","Ragged Xylopiano notes f.wav","Ragged Xylopiano notes mf.wav",
            ]
        },
        {
            Name : "Sounds and Scapes 7 - Percussion loops and chops",
            DownloadLink : "https://drive.google.com/file/d/1OctL1fLA3-ztJ_vKRRUqclvYALPj9e8k/view?usp=sharing",
            Img:"https://i.imgur.com/uFV2lg2.png",
            Date: new Date("2023-09-23T16:00:00Z"),
            Desc: "Different drum and percussion samples. Some are straightforwardly loopable: in these files the tempo is marked in the filename. Files named \"chops\" contain multiple samples of a single instrument. These samples are alternatively available pre-split into individual files.",
            Licence:"CC0",
            AltName : "Sounds and Scapes 7b - Percussion chops as oneshots",
            AltDownloadLink : "https://drive.google.com/file/d/1tDlbMLowqDxsYZwh0xi4rdb8iAJkmhgC/view?usp=sharing",
            AltImg : "https://i.imgur.com/rICt8EK.png",
            FileListing: [
                "Bdrum 104bpm pattern.wav","Bdrum 109bpm pattern, piano.wav","Bdrum chops.wav","Brush sound chops.wav","Cabasa 103bpm.wav","Cabasa 110bpm.wav","Cabasa 114bpm shake.wav","Cabasa 114bpm shake2.wav","Cabasa 121bpm sleazy.wav","Cabasa 141bpm 2.wav","Cabasa 141bpm.wav","Cabasa chops.wav","Claves 98bpm.wav","Claves chops.wav","Drumkit rims chops.wav","Drumsticks 153bpm.wav","Drumsticks 97bpm.wav","Maracas chops.wav","Mbira as percussion chops.wav","Mbira percussive loop 102bpm.wav","Rain Stick 1.wav","Rain Stick 2.wav","Rain Stick 3.wav","Shaker 1 102bpm loop.wav","Shaker 1 102bpm loop2.wav","Shaker 1 102bpm loop3.wav","Shaker 1 111bpm loop with tail.wav","Shaker 1 113bpm loop.wav","Shaker 1 122bpm loop.wav","Shaker 1 145bpm loop.wav","Shaker 1 chops.wav","Shaker 1 rolls.wav","Shaker 2 98bpm loop.wav","Shaker 2 98bpm loop2.wav","Shaker 2 chops.wav","Shaker 3 101bpm loop.wav","Shaker 3 104bpm loop.wav","Shaker 3 chops.wav","Shaker 4 101bpm loop.wav","Shaker 4 103bpm loop.wav","Shaker 4 chops.wav","Snare brush chops.wav","Snare brush sweep loop 2.wav","Snare brush sweep loop.wav","Snare Ghost note chops.wav","Snare rim chops Alt.wav","Snare rim chops.wav","Snare rolling 2.wav","Snare, no mat chops.wav","Tambourine1 102bpm loop.wav","Tambourine1 103bpm loop soft.wav","Tambourine1 108bpm loop.wav","Tambourine1 74bpm loop.wav","Tambourine1 99bpm loop.wav","Tambourine1 99bpm loop2.wav","Tambourine1 chops.wav","Tambourine1 rolls.wav","Tambourine2 chops.wav","Tom, floor chops.wav","Tom, hi chops.wav",
            ]
        },
        {
            Name : "Sounds and Scapes 8 - Cymbal samples",
            DownloadLink : "https://drive.google.com/file/d/1zspDKFOxpQ01jDjcVeUmKaY4jaVqAA6a/view?usp=sharing",
            Img:"https://i.imgur.com/f8ZltMP.png",
            Date: new Date("2023-09-23T16:00:00Z"),
            Desc: "Different drum kit cymbal samples. Some are straightforwardly loopable patterns: in these files the tempo is marked in the filename. Files named \"chops\" contain multiple samples of a single instrument. These samples are alternatively available pre-split into individual files.",
            Licence:"CC0",
            AltName : "Sounds and Scapes 8b - Cymbal samples as oneshots",
            AltDownloadLink : "https://drive.google.com/file/d/10MOe-Y_TJwbiGuQVYjVdeCo1npCtV5Nu/view?usp=sharing",
            AltImg : "https://i.imgur.com/pmOdsoY.png",
            FileListing: [
                "Crash cymbal-01.wav","Crash cymbal-02.wav","Crash cymbal-03.wav","Crash cymbal-04.wav","Crash cymbal-05.wav","Cymbals brush sweeps 2.wav","Cymbals brush sweeps.wav","Cymbals improvisation.wav","Hat 106bpm loop.wav","Hat 106bpm loop2.wav","Hat 96bpm basic pattern.wav","Hat Brushes chops.wav","Hat pedal 104bpm loop.wav","Hat pedal 104bpm loop2.wav","Ride cymbals, long oneshots.wav","Rides 77bpm.wav","Rides 95bpm.wav","Rides f.wav","Rides ff.wav","Rides mf.wav","Rides pp.wav",
            ]
        },
        {
            Name : "Sounds and Scapes 9 - Melodica sampler",
            DownloadLink : "https://drive.google.com/file/d/1jxjNjb1lcQK4i0wRiNw_FWiDgSE9YqZN/view?usp=sharing",
            Img:"https://i.imgur.com/jPedcaz.png",
            Date: new Date("2023-09-23T16:00:00Z"),
            Desc: "Sampler and individual samples of all the notes playable on my Startone melodica. Samples recorded in staccato and legato in two velocities. Samples are organized in the provided Ableton Sampler, where some timing issues in the samples are also corrected. In the sampler there are macro controls for sound manipulation.",
            Licence:"CC0",
            FileListing: [
                "MelLongf-01-F2.wav","MelLongf-02-F#2.wav","MelLongf-03-G2.wav","MelLongf-04-G#2.wav","MelLongf-05-A2.wav","MelLongf-06-A#2.wav","MelLongf-07-B2.wav","MelLongf-08-C3.wav","MelLongf-09-C#3.wav","MelLongf-10-D3.wav","MelLongf-11-D#3.wav","MelLongf-12-E3.wav","MelLongf-13-F3.wav","MelLongf-14-F#3.wav","MelLongf-15-G3.wav","MelLongf-16-G#3.wav","MelLongf-17-A3.wav","MelLongf-18-A#3.wav","MelLongf-19-B3.wav","MelLongf-20-C4.wav","MelLongf-21-C#4.wav","MelLongf-22-D4.wav","MelLongf-23-D#4.wav","MelLongf-24-E4.wav","MelLongf-25-F4.wav","MelLongf-26-F#4.wav","MelLongf-27-G4.wav","MelLongf-28-G#4.wav","MelLongf-29-A4.wav","MelLongf-30-A#4.wav","MelLongf-31-B4.wav","MelLongf-32-C5.wav","MelLongp-01-F2.wav","MelLongp-02-F#2.wav","MelLongp-03-G2.wav","MelLongp-04-G#2.wav","MelLongp-05-A2.wav","MelLongp-06-A#2.wav","MelLongp-07-B2.wav","MelLongp-08-C3.wav","MelLongp-09-C#3.wav","MelLongp-10-D3.wav","MelLongp-11-D#3.wav","MelLongp-12-E3.wav","MelLongp-13-F3.wav","MelLongp-14-F#3.wav","MelLongp-15-G3.wav","MelLongp-16-G#3.wav","MelLongp-17-A3.wav","MelLongp-18-A#3.wav","MelLongp-19-B3.wav","MelLongp-20-C4.wav","MelLongp-21-C#4.wav","MelLongp-22-D4.wav","MelLongp-23-D#4.wav","MelLongp-24-E4.wav","MelLongp-25-F4.wav","MelLongp-26-F#4.wav","MelLongp-27-G4.wav","MelLongp-28-G#4.wav","MelLongp-29-A4.wav","MelLongp-30-A#4.wav","MelLongp-31-B4.wav","MelLongp-32-C5.wav","MelShrt-01-F2.wav","MelShrt-02-F#2.wav","MelShrt-03-G2.wav","MelShrt-04-G#2.wav","MelShrt-05-A2.wav","MelShrt-07-A#2.wav","MelShrt-08-B2.wav","MelShrt-09-C3.wav","MelShrt-10-C#3.wav","MelShrt-11-D3.wav","MelShrt-12-D#3.wav","MelShrt-13-E3.wav","MelShrt-14-F3.wav","MelShrt-15-F#3.wav","MelShrt-16-G3.wav","MelShrt-17-G#3.wav","MelShrt-18-A3.wav","MelShrt-19-A#3.wav","MelShrt-20-B3.wav","MelShrt-21-C4.wav","MelShrt-22-C#4.wav","MelShrt-23-D4.wav","MelShrt-24-D#4.wav","MelShrt-25-E4.wav","MelShrt-26-F4.wav","MelShrt-27-F#4.wav","MelShrt-28-G4.wav","MelShrt-29-G#4.wav","MelShrt-30-A4.wav","MelShrt-31-A#4.wav","MelShrt-32-B4.wav","MelShrt-33-C5.wav","MelStacc-01-F2.wav","MelStacc-02-F#2.wav","MelStacc-03-G2.wav","MelStacc-04-G#2.wav","MelStacc-05-A2.wav","MelStacc-06-A#2.wav","MelStacc-07-B2.wav","MelStacc-08-C3.wav","MelStacc-09-C#3.wav","MelStacc-10-D3.wav","MelStacc-11-D#3.wav","MelStacc-12-E3.wav","MelStacc-13-F3.wav","MelStacc-14-F#3.wav","MelStacc-15-G3.wav","MelStacc-16-G#3.wav","MelStacc-17-A3.wav","MelStacc-18-A#3.wav","MelStacc-19-B3.wav","MelStacc-20-C4.wav","MelStacc-21-C#4.wav","MelStacc-22-D4.wav","MelStacc-23-D#4.wav","MelStacc-24-E4.wav","MelStacc-25-F4.wav","MelStacc-26-F#4.wav","MelStacc-27-G4.wav","MelStacc-28-G#4.wav","MelStacc-29-A4.wav","MelStacc-30-A#4.wav","MelStacc-31-B4.wav","MelStacc-32-C5.wav",
            ]
        },
        {
            Name : "Sounds and Scapes 10 - Cajon sampler",
            DownloadLink : "https://drive.google.com/file/d/1XhnHnSGBSRxjIXzVgl4P0kzpz0dXfIDo/view?usp=sharing",
            Img:"https://i.imgur.com/cQRJftD.png",
            Date: new Date("2023-09-23T16:00:00Z"),
            Desc: "Sampler and individual samples of different hits performed on a cajon drum. Provided is a sampler and individual samples recorded simultaneously with two microphones: a bass drum mic from the back of the cajon and a Zoom H5 handy recorder from the front of the drum. In the ableton sampler the samples are synced to single drum pads with the option to change the volume of both microphones individually.",
            Licence:"CC0",
            FileListing: [
                "1 Kick p1.wav","10 Kick f2.wav","11 Kick p.wav","12 Kick p2.wav","13 Kick muted.wav","14 Kick muted.wav","15 Kick muted2.wav","16 Kick muted2.wav","17 Kick muted3.wav","18 Kick muted3.wav","19 Kick muted4.wav","2 Kick p2.wav","20 Kick muted4.wav","21 Kick muted5.wav","22 Kick muted5.wav","23 Snare p.wav","24 Snare p.wav","25 Snare mp.wav","26 Snare mp.wav","27 Snare f.wav","28 Snare f.wav","29 Snare ppp.wav","3 Kick mp-1.wav","30 Snare ppp.wav","31 Snare mute1.wav","32 Snare mute1.wav","33 Snare mute2.wav","34 Snare mute2.wav","35 Snare mute3.wav","36 Snare mute4.wav","37 Slap ppp.wav","38 Slap ppp.wav","39 Slap mf.wav","4 Kick mp-2.wav","40 Slap mf.wav","41 Slap pp.wav","42 Slap pp.wav","43 Slap p.wav","44 Slap p.wav","45 Slap mute 1.wav","46 Slap mute 1.wav","47 Slap mute 2.wav","48 Slap mute2.wav","49 Slap Mute3.wav","5 Kick thump 1.wav","50 Slap mute3.wav","51 Slap mute4.wav","52 Slap mute4.wav","53 Slap mute5.wav","54 Slap mute5.wav","55 Slap mute6.wav","56 Slap mute6.wav","57 Slap mute7.wav","58 Slap mute7.wav","59 Slap mute8.wav","6 Kick thump 2.wav","60 Slap mute8.wav","7 Kick thump f.wav","8 Kick thump f2.wav","9 Kick f1.wav",
            ]
        },
    ]
}*/


class SnSListing extends HenkimaailmaPage {
    //SnSPacks = SnSData.Packs;
    SnSPacks = this.props.data.Packs;
    

    render() {
        return (
            <div className="KontentBox">
                <div className="PostTitle">
                    <h1><NavLink to="../">posts</NavLink> / sounds and scapes -samplepacks (aggregate page)</h1>
                </div>

                <h2>About these collections</h2>
                <p>SnS samplepacks are an ongoing project of mine where I aim to produce different types of royalty free and easily accessible sound material. Most (if not all) of the files and other material listed here are distributed under the <a href="https://creativecommons.org/publicdomain/zero/1.0/">Creative Commons CC0 licence.</a></p>
                <p>I believe that fair competition in and the well-being of the media production field requires as much publicly available, free audiovisual material as possible. The SnS samplepacks are intended to be my contributions to the public domain - clay free to be molded into things of your own without the need to worry about copyright infringement or crediting me in the works utilizing any of the materials listed below.</p>
                <p>In practice the only restriction on the part of you, the user, is that you may not claim you have made the sounds themselves (see: moral right and copyright). In derivative works (as in any stuff you use these sounds in), however, there is zero obligation to disclose where the sounds originate from.</p>
                <br/>

            <h2>Sounds and Scapes samplepacks:</h2>

            <div className = "SnSListing">
                {this.SnSPacks.map((samplepack) =>
                    <SamplePack pack={samplepack} key={samplepack.Name}/>)}
            </div>

            </div>
        )
    }
}

class SamplePack extends React.Component {
    render() {
        let pack = this.props.pack
        let name = pack.Name
        let desc = pack.Desc

        let date = parseDate(pack.Date)
        let updated;
        if (pack.UpDated === undefined) {
            updated = "";
        } else { updated = " (Updated "+parseDate(pack.UpDated)+")"}


        let licence = pack.Licence
        let licencelink;
        if (licence==="CC0") {licencelink = "https://creativecommons.org/publicdomain/zero/1.0/"}

        return (
            <div className="SnSPack">
                <div className="SnSPackInfo">
                    <div>
                        <h1>{name}</h1>
                        <div>{date}{updated}</div>
                        <div>Licence: <a href={licencelink}>{licence}</a></div>
                        <div className="SnSDescription">
                        {desc}
                        </div>
                    </div>

                        {DownloadButtons(pack)}
                    
                </div>
                <div className="SnSFileListing">
                    {FileListing(pack)}
                </div>
            </div>
        )
    }
}

function DownloadButtons(pack) {
    let packname = pack.Name
    let packImage = pack.Img
    let downloadLink = pack.DownloadLink
    let altName = pack.AltName
    let altImage = pack.AltImg
    let AltDownloadLink = pack.AltDownloadLink
    if (altName===undefined) {
        return (
            <div className="SnSDownloadButtonsContainer">
        <a href={downloadLink}>
            <div className="img-button">
                <div className="img-button-imagecontainer">
                    <img src={packImage} alt={packname}></img>
                </div>
                <div className="SnSDownloadText"><b>Download</b><br/>{packname}</div>
            </div>
        </a>
        </div>
        )
    } else return (
        <div className="SnSDownloadButtonsContainer">
        <a href={downloadLink}>
            <div className="img-button">
                <div className="img-button-imagecontainer">
                    <img src={packImage} alt={packname}></img>
                </div>
            <div className="SnSDownloadText"><b>Download</b><br/>{packname}</div>
            </div>
        </a>
                <a href={AltDownloadLink}>
                <div className="img-button">
                    <div className="img-button-imagecontainer">
                        <img src={altImage} alt={altName}></img>
                    </div>
                <div className="SnSDownloadText"><b>Download</b><br/>{altName}</div>
                </div>
            </a>
            </div>
    )
}

function FileListing(pack) {
    let files = pack.FileListing
    let listDOMkey = pack.Name+"listing"
    let showbuttonkey = pack.Name+"show"
    let hidebuttonkey = pack.Name+"hide"

    return (
        <>
        <div className="SnSTracklistingButtonsarea">
            <button 
                id={showbuttonkey}
                display="block"
                className="SnSShowTrackListingButton"
                onClick={function() {
                    var x= document.getElementById(listDOMkey)
                    var y= document.getElementById(showbuttonkey)
                    var z= document.getElementById(hidebuttonkey)
                    if (x.style.display !== "block") {
                        x.style.display = "block";
                        y.style.display = "none";
                        z.style.display = "block";
                        } else {
                        x.style.display = "none";
                        y.style.display = "block";
                        z.style.display = "none";
                        }
                    }
                }>
                {"> "}Show file listing
            </button>
            <button 
                id={hidebuttonkey}
                className="SnSHideTrackListingButton"
                onClick={function() {
                    var x= document.getElementById(listDOMkey)
                    var y= document.getElementById(showbuttonkey)
                    var z= document.getElementById(hidebuttonkey)
                    if (x.style.display !== "block") {
                        x.style.display = "block";
                        y.style.display = "none";
                        z.style.display = "block";
                        } else {
                        x.style.display = "none";
                        y.style.display = "block";
                        z.style.display = "none";
                        }
                    }
                }>
                {"< "}Hide file listing
            </button>
        </div>

        <ul id={listDOMkey} display="block" className="SnSTrackListing">
            {files.map((filename => {
                return <li key={filename}>{filename}</li>
            }))} 
        </ul>   
        </>
    )
}

