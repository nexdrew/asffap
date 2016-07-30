// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  skeptic: require('../assets/Skeptical-Look.jpg'),
  interested: require('../assets/interested.jpg'),
  ok: require('../assets/ok.jpg'),
  notImpressed: require('../assets/not-impressed.jpg'),
  commitBring: require('../assets/commit-bring.png'),
  commitInstagram: require('../assets/commit-instagram.png'),
  commitLate: require('../assets/commit-late.png'),
  commitLock: require('../assets/commit-lock.png'),
  squashMerge: require('../assets/squash-merge.png'),
  soWhat: require('../assets/so-what.jpg'),
  wait: require('../assets/wait.jpg'),
  changelog: require('../assets/changelog.png'),
  really: require('../assets/really.jpg'),
  end: require('../assets/end.jpg')
};

preloader(images);

const theme = createTheme({
  primary: "#40cc61"
});

const m1 = '-50px 0 0 0'
const m2 = '-350px 0px 0px 0px'
const m3 = '-10px 0 0 0'

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>
          <Slide transition={["fade", "spin"]}>
            <Heading fit caps textColor="black" margin={m1}>Automating</Heading>
            <Heading fit caps textColor="black" margin={m1}>SemVer</Heading>
            <Heading fit>for fun 😝 and profit 🤑</Heading>
          </Slide>
          <Slide bgImage={images.skeptic.replace("/", "")}>
            <Heading textColor="white" fit margin={m2}>&nbsp;&nbsp;&nbsp;fun?&nbsp;&nbsp;&nbsp;</Heading>
          </Slide>
          <Slide transition={["fade", "spin"]} bgColor="white">
            <Heading fit textColor="primary" margin={m1}>Yes, Arnold</Heading>
            <Heading fit textColor="black">open source is fun!</Heading>
          </Slide>
          <Slide bgImage={images.interested.replace("/", "")}>
            <Heading textColor="white" fit margin={m2}>&nbsp;and profit?&nbsp;</Heading>
          </Slide>
          <Slide transition={["fade", "spin"]} bgColor="white">
            <Heading fit textColor="primary" margin={m1}>&nbsp;Well, kinda&nbsp;</Heading>
            <Heading fit textColor="black">this message applies</Heading>
            <Heading fit textColor="black">&nbsp;to your dayjob too&nbsp;</Heading>
          </Slide>
          <Slide bgImage={images.ok.replace("/", "")}>
            <Heading textColor="white" fit margin={m2}>&nbsp;&nbsp;ok, i’m listening&nbsp;&nbsp;</Heading>
            <Heading textColor="white" fit>how do i automate semver?</Heading>
          </Slide>
          <Slide transition={["fade", "spin"]} bgColor="white">
            <Heading textColor="black" margin={m1}>3 words:</Heading>
            <Appear><Heading fit caps textColor="primary">&nbsp;&nbsp;structured&nbsp;&nbsp;</Heading></Appear>
            <Appear><Heading fit caps textColor="primary" margin={m3}>&nbsp;&nbsp;commit&nbsp;&nbsp;</Heading></Appear>
            <Appear><Heading fit caps textColor="primary" margin={m3}>&nbsp;&nbsp;messages&nbsp;&nbsp;</Heading></Appear>
          </Slide>
          <Slide bgImage={images.notImpressed.replace("/", "")}>
            <Appear><Heading textColor="white" fit margin={m2}>structured commit msgs?</Heading></Appear>
            <Appear><Heading textColor="white" fit>more work! invades my creative space!</Heading></Appear>
          </Slide>
          <Slide transition={["fade", "spin"]} bgColor="white">
            <Heading textColor="black">First of all</Heading>
            <Heading fit caps textColor="primary">DEFER THE STRUCTURE</Heading>
            <Heading fit textColor="black">until you’re ready to merge</Heading>
          </Slide>
          <Slide bgColor="black" transition={["fade"]}>
            <Heading textColor="white">The Idea</Heading>
            <List>
              <ListItem textColor="white">stick with your witty everyday commit msgs</ListItem>
              <ListItem textColor="black">push your changes</ListItem>
              <ListItem textColor="black">open PR and review</ListItem>
              <ListItem textColor="black">(sound familiar?)</ListItem>
              <ListItem caps textColor="black">squash and merge</ListItem>
              <ListItem caps textColor="black">add structure</ListItem>
            </List>
          </Slide>
          <Slide bgColor="white" transition={["fade"]}>
            <Image src={images.commitLock.replace("/", "")} height="120px"/>
            <Image src={images.commitInstagram.replace("/", "")} height="120px"/>
            <Image src={images.commitLate.replace("/", "")} height="120px"/>
            <Image src={images.commitBring.replace("/", "")} height="120px"/>
          </Slide>
          <Slide bgColor="black" transition={["fade"]}>
            <Heading textColor="white">The Idea</Heading>
            <List>
              <ListItem textColor="white">stick with your witty everyday commit msgs</ListItem>
              <ListItem textColor="white">push your changes</ListItem>
              <Appear><ListItem textColor="white">open PR and review</ListItem></Appear>
              <Appear><ListItem textColor="white">(sound familiar?)</ListItem></Appear>
              <Appear><ListItem caps textColor="primary">squash and merge</ListItem></Appear>
              <Appear><ListItem caps textColor="primary">add structure</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade", "spin"]} bgColor="white">
            <Heading textColor="black">Secondly</Heading>
            <Heading fit caps textColor="primary">STRUCTURE IS EASY!</Heading>
          </Slide>
          <Slide bgColor="primary" transition={["fade"]} textColor="white">
            <Heading>feat:</Heading>
            <Heading>fix:</Heading>
            <Heading>BREAKING CHANGE</Heading>
            <Text>(Angular conventions)</Text>
          </Slide>
          <Slide transition={["fade", "spin"]} bgColor="white">
            <Heading textColor="black">Example</Heading>
            <Image src={images.squashMerge.replace("/", "")} height="238px"/>
          </Slide>
          <Slide transition={["fade"]} bgColor="white">
            <Heading textColor="black">That’s it</Heading>
            <Heading fit caps textColor="primary">EASY!</Heading>
          </Slide>
          <Slide bgImage={images.soWhat.replace("/", "")}>
            <Heading textColor="white" fit margin={m2}>&nbsp;&nbsp;&nbsp;&nbsp;ok, so what?&nbsp;&nbsp;&nbsp;&nbsp;</Heading>
            <Heading textColor="white" fit>where does the "automating" part come in?</Heading>
          </Slide>
          <Slide transition={["fade", "spin"]} bgColor="white" textColor="black">
            <Heading textColor="black" margin={m1}>Enter</Heading>
            <Heading fit textColor="primary">standard-version</Heading>
          </Slide>
          <Slide bgColor="black" transition={["fade"]}>
            <Heading textColor="white">Before</Heading>
            <CodePane textSize="1.25em" source={require("raw!../assets/npm-version.example")}/>
            <Text textColor="white">(or worse, edit package.json by hand)</Text>
            <br/>
            <Heading fit textColor="white">you have to THINK about it</Heading>
            <Heading fit textColor="white">AFTER changes have been made</Heading>
          </Slide>
          <Slide bgColor="primary" transition={["fade"]}>
            <Heading textColor="white">Now</Heading>
            <CodePane textSize="1.25em" source={require("raw!../assets/standard-version.example")}/>
            <Heading fit textColor="white">bump the semver version for you</Heading>
            <Heading fit textColor="white">NO THOUGHT REQUIRED</Heading>
            <Text textColor="white">you already told it what to bump during merge</Text>
            <Text textColor="white">when the changes were still fresh on your mind</Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="white">
            <Heading fit textColor="black">Time to cut a release?</Heading>
            <br/>
            <Heading fit textColor="black">Let the commit history</Heading>
            <Heading fit caps textColor="primary">speak for itself</Heading>
          </Slide>
          <Slide bgImage={images.wait.replace("/", "")}>
            <Heading textColor="white" fit margin={m2}>wait, that’s all there is to it?</Heading>
          </Slide>
          <Slide transition={["fade", "spin"]} bgColor="white">
            <Heading fit textColor="primary" margin={m1}>Actually, Arnold</Heading>
            <Heading fit textColor="black">it gets even better!</Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading fit textColor="black" margin={m1}>You get changelog generation</Heading>
            <Heading fit textColor="white">FOR FREE</Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="white">
            <Image src={images.changelog.replace("/", "")} height="600px"/>
          </Slide>
          <Slide transition={["fade"]} bgColor="white">
            <Heading fit textColor="black" margin={m1}>You did the hard work upfront with</Heading>
            <Heading fit textColor="primary">structured commit msgs</Heading>
            <Heading fit textColor="black">Let your commit history work for you</Heading>
            <Heading fit textColor="primary">No more manual changelogs</Heading>
          </Slide>
          <Slide bgImage={images.really.replace("/", "")}>
            <Heading textColor="white" fit margin={m2}>i like the sound of that.</Heading>
            <Heading textColor="white" fit>what was that tool again?</Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading textColor="white" fit margin={m1}>&nbsp;&nbsp;standard-version&nbsp;&nbsp;</Heading>
            <Text>As npm run script</Text>
            <CodePane textSize="0.6em" source={require("raw!../assets/install-devdep.example")}/>
            <CodePane textSize="0.6em" source={require("raw!../assets/json.example")}/>
            <CodePane textSize="0.6em" source={require("raw!../assets/npm-run.example")}/>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading textColor="white" fit margin={m1}>&nbsp;&nbsp;standard-version&nbsp;&nbsp;</Heading>
            <Text>As global bin</Text>
            <CodePane textSize="0.6em" source={require("raw!../assets/install-global.example")}/>
            <CodePane textSize="0.6em" source={require("raw!../assets/global-run.example")}/>
          </Slide>
          <Slide transition={["fade"]} bgColor="white">
            <Heading textColor="primary" fit margin={m1}>standard-version</Heading>
            <Heading fit textColor="black">Opinionated, local changes only</Heading>
            <br/><br/>
            <Heading fit textColor="black">For full automation, check out</Heading>
            <Heading fit textColor="primary">semantic-release</Heading>
          </Slide>
          <Slide bgImage={images.end.replace("/", "")}>
            <Heading textColor="white" fit margin={m2}>cool, thanks! i gotta split.</Heading>
          </Slide>
          <Slide transition={["fade", "spin"]} bgColor="black">
            <Heading fit textColor="white" margin={m1}>If you have any questions, hit me up</Heading>
            <Heading fit textColor="primary">@nexdrew</Heading>
            <Heading fit textColor="white">or andrew@npmjs.com</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
