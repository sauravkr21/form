import React from "react";
import { AdditionalButton } from "./AdditionalButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Components/Additionalbutton',
    component: AdditionalButton,
} as ComponentMeta<typeof AdditionalButton>;

const AdditionalButtonTemplate: ComponentStory<typeof AdditionalButton> = (args) => <AdditionalButton {...args} />;

export const AddAccount =  AdditionalButtonTemplate.bind({});

AddAccount.args = {
    type: 'primary',
    label: "Add Account",
    iconType: 'account',
    onClick: () => {alert('ok')},
}

export const AddContact = AdditionalButtonTemplate.bind({});

AddContact.args = {
    type: 'primary',
    label: "Add Contact",
    iconType: 'contact',
    onClick: () => {alert('ok')},
}

export const AddLead = AdditionalButtonTemplate.bind({});

AddLead.args = {
    type: 'primary',
    label: "Add Lead",
    iconType: 'lead',
    onClick: () => {alert('ok')},
}

export const CreateCampaign = AdditionalButtonTemplate.bind({});

CreateCampaign.args = {
    type: 'primary',
    label: "Create Campaign",
    iconType: 'campaign',
    onClick: () => {alert('ok')},
}

export const Next = AdditionalButtonTemplate.bind({});

Next.args = {
    type: 'primary',
    label: "Next",
    iconType: 'next',
    iconLeft : false,
    onClick: () => {alert('ok')},
}