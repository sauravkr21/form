import React from "react";
import { Link } from "./link";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Components/Link',
    component: Link,
} as ComponentMeta<typeof Link>;

const LinkTemplate: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const Default = LinkTemplate.bind({});

Default.args = {
    disabled: false,
    label: "Link",
    link: "https://www.nohello.com/"
}

export const Disabled = LinkTemplate.bind({});

Disabled.args = {
    disabled: true,
    label: "Link",
    link: "https://www.nohello.com/"
}
