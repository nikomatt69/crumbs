import React, { useEffect, useState } from 'react';
import { Meta, StoryContext, StoryFn } from '@storybook/react';
import { Modal } from '../Modal';  // Adjust the import path as necessary
import { XMarkIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { EnvelopeClosedIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { fn } from '@storybook/test';
import { action } from '@storybook/addon-actions';
import { CardBody } from '../3DCard';
import { Card } from '../Card';

export default {
  title: 'Components/Modal',
  component: Modal,
  decorators: [
    (Story) => (
      <div className="app-background">
        <Story />
      </div>
    )
  ],
  argTypes: {
    show: {
      control: 'boolean',
      defaultValue: false,
      description: 'Controls the visibility of the modal.'
    },
    size: {
      control: { type: 'select', options: ['xs', 'sm', 'md', 'lg'] },
      defaultValue: 'sm',
      description: 'Sets the size of the modal based on predefined sizes.'
    },
    icon: {
      control: { type: 'select', options: ['none', 'XMark', 'Info', 'Warning'] },
      mapping: {
        none: null,
        XMark: <XMarkIcon className="h-5 w-5 text-blue-500" />,
        Info: <InformationCircleIcon className="h-5 w-5 text-green-500" />,
        Warning: <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
      },
      defaultValue: 'none',
      description: 'Select an icon to display in the modal header.'
    },
    title: {
      control: 'text',
      defaultValue: 'Default Title',
      description: 'The title displayed in the modal header.'
    },
    children: {
      control: 'text',
      defaultValue: 'Content goes here.',
      description: 'The content of the modal, can be text or more complex JSX.'
    },
    onClose: {
      action: 'onClose',
      control: 'boolean',
      description: 'Function that will be called when the modal is requested to close.'
    },
  },
  tags: ['autodocs'],
} as Meta

export const Template: StoryFn<React.ComponentProps<typeof Modal>> = (args) => <Modal   {...args}/>
  // Handle the onClose to toggle the visibility of the modal
Template.args = {
    show: false,
    title: 'Default Modal',
    children: <p className='p-3'>This is a default modal with minimal content.</p>,
    onClose: () => {
      action('onClose')({ show: false });
        // Toggle visibility off when modal is closed
    }
};
  



export const Default: StoryFn<React.ComponentProps<typeof Modal>> = (args) => <Card><Modal   {...args}/></Card>
Default.args = {
  show: false,
  title: 'Default Modal',
  children: <p className='p-3'>This is a default modal with minimal content.</p>,
  onClose: () => console.log('Modal closed'),
};
export const WithIcon: StoryFn<React.ComponentProps<typeof Modal>> = (args) => <Modal   {...args}/>
WithIcon.args = {
  show: false,
  icon: <EnvelopeClosedIcon className="h-5 w-5" />,
  title: 'Modal with Icon',
  children: <div className='p-3'>This modal includes an icon in its title.</div>,
  onClose: () => console.log('Modal closed'),
};
export const DynamicContent: StoryFn<React.ComponentProps<typeof Modal>> = (args) => <Modal   {...args}/>
DynamicContent.args = {
  show: false,
  title: 'Dynamic Content Modal',
  children: <div className='p-3'>{new Array(5).fill(null).map((_, i) => <p key={i}>Item {i + 1}</p>)}</div>,
  onClose: () => console.log('Modal closed'),
};
export const AccessibilityTest: StoryFn<React.ComponentProps<typeof Modal>> = (args) => <Modal   {...args}/>
AccessibilityTest.args = {
  show: false,
  title: 'Accessibility Test Modal',
  children: <div className='p-3'>Test the accessibility features of the modal.</div>,
  onClose: () => console.log('Modal closed'),
};
AccessibilityTest.parameters = {
  a11y: {
    config: {
      rules: [{ id: 'dialog-role', enabled: true }]
    }
  }
};
export const NestedModal: StoryFn<React.ComponentProps<typeof Modal>> = (args) => <Modal   {...args}/>
NestedModal.args = {
  show: false,
  title: 'Nested Modal',
  onClose: () => console.log('Modal closed'),
  children: (
    <>
      <p className='p-3'>Main modal content</p>
      <Modal title="Inner Modal" show={true}>
        <p className='p-3 h-80 w-80'>Content of the inner modal</p>
      </Modal>
    </>
  ),
};
export const FormModal: StoryFn<React.ComponentProps<typeof Modal>> = (args) => <Modal   {...args}/>
FormModal.args = {
  show: false,
  onClose: () => console.log('Modal closed'),
  title: 'Form Modal',
  children: (
    <form className='p-3 ' onSubmit={(e) => {
      e.preventDefault();
      alert('Form submitted');
    }}>
      <input className='p-3 ' type="text" placeholder="Type here..." required />
      <button  className='p-3 ' type="submit">Submit</button>
    </form>
  ),
};