'use client';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';
import { memo, useCallback, useMemo, useState } from 'react';
import { sendEmail } from './../pages/api/send-email.js';



const Form = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState(defaultData);
  const { name, email, message } = data;

  const onChange = useCallback(
    (event) => {
      const {name, value} = event.target;

      const fieldData = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event) => {
      event.preventDefault();
        sendEmail({ email, name, message })
      console.log('Data to send: ', data);
      event.target.reset();
    },
    [data]
  )

  return (
    <form className='flex flex-col gap-y-4'
    method='POST' onSubmit={handleSendMessage}>
      {/* input */}
      <div className='relative flex text-[#db9d00] items-center'>
        <Input 
          autoComplete="name"
          className={Input} 
          name="name" 
          onChange={onChange} 
          placeholder="Name" 
          required type="text"
        />
        <User className='absolute right-6' size={20} />
      </div>
      {/* input */}
      <div className='relative flex text-[#db9d00] items-center'>
        <Input 
          autoComplete="email"
          className={Input}
          name="email"
          onChange={onChange}
          placeholder="Email"
          required
          type="email"
          />
        <MailIcon className='absolute right-6' size={20} />
      </div>
      {/* textarea */}
      <div className='relative flex text-[#db9d00] items-center'>
        <Textarea 
          className={Textarea}
          maxLength={250}
          name="message"
          onChange={onChange}
          placeholder="Message"
          required
          rows={6}
          />
        <MessageSquare className='absolute top-4 right-6' size={20} />
      </div>
      <Button 
        onClick={() => toast.success('Email Sent to Patrick Becker')}
        aria-label="Submit contact form"
        className='flex items-center gap-x-1 max-w-[166px]'
        type="submit">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
});

export default Form;
