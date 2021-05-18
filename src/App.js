import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import SyncIcon from '@material-ui/icons/Sync';
import Fab from '@material-ui/core/Fab';
import random from './avataaars.png'
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

const teamMembers = [
  { name: 'Taylor Clark', img: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=Blank&clotheType=Hoodie&clotheColor=Heather&eyeType=Squint&eyebrowType=Default&mouthType=Smile&skinColor=Pale' },
  { name: 'Delvin Hall', img: 'https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Side&eyebrowType=UpDown&mouthType=Serious&skinColor=DarkBrown' },
  { name: 'Nishant Seth', img: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Wayfarers&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Black&eyeType=Happy&eyebrowType=UnibrowNatural&mouthType=Twinkle&skinColor=Light' },
  { name: 'Chad Gabrysch would like to pass it to Brian Denholm', img: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShaggyMullet&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=PastelBlue&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Concerned&skinColor=Light' },
  { name: 'Chris Soloman', img: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Brown&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Blue03&eyeType=Squint&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Light' },
  { name: 'Linda Stewart', img: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBun&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Blue02&eyeType=Side&eyebrowType=Default&mouthType=Default&skinColor=Black' },
  { name: 'Cris Sakae', img: 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Round&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light' },
  { name: 'Kristin Erikson', img: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Kurt&hairColor=Brown&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Black&graphicType=Skull&eyeType=Happy&eyebrowType=Default&mouthType=Serious&skinColor=Pale' },
  { name: 'Brian Denholm', img: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Wayfarers&hairColor=Auburn&facialHairType=Blank&clotheType=Hoodie&clotheColor=PastelBlue&eyeType=Surprised&eyebrowType=RaisedExcitedNatural&mouthType=Tongue&skinColor=Light' },
  { name: 'Jourdan McClish', img: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Blue02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale' },
];

const others = [
  { name: 'Justin Egbert', img: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Sunglasses&hairColor=SilverGray&facialHairType=MoustacheFancy&facialHairColor=BlondeGolden&clotheType=ShirtScoopNeck&clotheColor=PastelGreen&eyeType=Dizzy&eyebrowType=Default&mouthType=Grimace&skinColor=Yellow' },
  { name: 'Kim Bacon', img: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=PastelPink&facialHairType=BeardMajestic&facialHairColor=Brown&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Wink&eyebrowType=UpDown&mouthType=Twinkle&skinColor=Pale' },
  { name: 'Michael Wu', img: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Round&hairColor=PastelPink&facialHairType=MoustacheFancy&facialHairColor=BlondeGolden&clotheType=Hoodie&clotheColor=Red&eyeType=WinkWacky&eyebrowType=UnibrowNatural&mouthType=Eating&skinColor=Pale' },
  { name: 'Evan Bakkal', img: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Sunglasses&hairColor=Red&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=Overall&clotheColor=PastelYellow&eyeType=Hearts&eyebrowType=SadConcernedNatural&mouthType=Eating&skinColor=Pale' },
  { name: 'Dean Woolley', img: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Round&hatColor=PastelYellow&facialHairType=BeardMedium&facialHairColor=Red&clotheType=ShirtCrewNeck&clotheColor=Blue02&eyeType=Happy&eyebrowType=UpDownNatural&mouthType=Serious&skinColor=Light' },
  { name: 'Art Macias', img: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Blank&hairColor=SilverGray&facialHairType=BeardMajestic&facialHairColor=Brown&clotheType=BlazerSweater&clotheColor=Red&eyeType=Surprised&eyebrowType=UpDown&mouthType=Eating&skinColor=Tanned' },
  { name: 'Delvin Hall', img: 'https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Side&eyebrowType=UpDown&mouthType=Serious&skinColor=DarkBrown' },
  { name: 'Chad Gabrysch', img: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShaggyMullet&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=PastelBlue&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Concerned&skinColor=Light' },
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  outerSpan: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    textAlign: 'center'
  },
  App: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }
}));

const App = () => {
  const classes = useStyles();
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const randomize = () => {
    var random = others[Math.floor(Math.random() * others.length)];
    let randomIndex = others.indexOf(random);
    others.splice(randomIndex, 1);
    setSelectedTeamMember(random);
  }
  return (
    <div className={classes.App}>
      <h1>
        Randomizer
      </h1>
      <span>DISCLAIMER: all of the avatars are randomly generated. (except for Chad and Delvin)</span>
      <br />
      {others.length > 0 ? (
      <Grid container spacing={3}>
        <Grid container alignItems={'center'} justify={'center'} style={{ width: "100%" }} item xs={12}>
          <Fab variant="extended" onClick={() => randomize()}>
            <SyncIcon className={classes.extendedIcon} />  Randomize
          </Fab>
        </Grid>
        <Grid item xs={12}>
          <Avatar style={{ margin: 'auto', width: "250px", height: "250px", }} src={selectedTeamMember === null ? random : selectedTeamMember.img} className={classes.large} />
          <div style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '20px' }}>{selectedTeamMember === null ? 'Who will we choose?' : selectedTeamMember.name}</div>
        </Grid>
      </Grid>) : ( <div style={{fontSize: "40px"}}>Everyone has gone!</div>)}
    </div>
  );
}

export default App;
