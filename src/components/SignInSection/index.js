import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import SignIn from "./../SignIn";
import GithubButton from "./../../components/GitHubSignInButton";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function SignInSection(props) {
  const router = useRouter();

  // Go to page after signin
  const onSignin = () => {
    router.push("/dashboard");
  };

  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <SignIn
          buttonText={props.buttonText}
          parentColor={props.color}
          onSignin={onSignin}
        />
        <GithubButton
          GithubButtonText={props.GithubButtonText}
        />
      </div>
    </Section>
  );
}

export default SignInSection;
