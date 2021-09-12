import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import { myAge } from '../components/functions/currentage';

export default function AboutMe() {
  return (
      <Layout>
          <Head>
              <title>About Me</title>
          </Head>
          <div className="relative h-screen w-full">
            <div className="flex flex-col justify-center items-center pt-8 sm:flex-row">
              <section className="px-4">
                <>
                  <a href="/images/tradgard2flipped.png">
                    <Image
                      priority
                      src="/images/tradgard2flipped.png"
                      className="absolute"
                      width={367}
                      height={500}
                      layout="intrinsic"
                      alt="hej"
                    />
                  </a>
                </>
              </section>
              <section className="p-4">
                <div className="w-1/1 flex flex-col bg-yellow-100 px-10 py-14">
                  <div className="max-w-xs">
                    <h1 className="text-3xl pb-2">About Me</h1>
                    <p><b>Age:</b> {myAge} years old.</p>
                    <p><b>Hometown:</b> Stockholm, Sweden.</p>
                    <p><b>Hobbies:</b> Games (board-, card- and videogames),
                    crocheting, aerial hoop, listening to podcasts about
                    communication and psychology.</p>
                    <p><b>Current Project:</b> Preserving flowers to put in a frame. Oh, and this website.</p>
                    <p><b>Current Haircolor:</b> Purple.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
      </Layout>
  );
};
