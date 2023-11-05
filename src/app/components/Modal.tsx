"use client";
import Image from "next/image";
import { Button, Carousel } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Quote() {
  const router = useRouter();
  return (
    <>
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        id="error-modal"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          >
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  John A Pissaro 
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    “Life is like a train ride.

                    The passengers on the train are seemingly going to the same
                    destination as you, but based on their belief in you or
                    their belief that the train will get them to their desired
                    destination they will stay on the ride or they will get off
                    somewhere during the trip.

                    People can and will get off at any stop.

                    Just know that where people get off is more of an reflection
                    on them, than it is on you.

                    There will be a few people in your life that will make the
                    whole trip with you, who believe in you, accept that you are
                    human and that mistakes will be made along the way, and that
                    you will get to your desired destination - together, no
                    matter what.

                    Be very grateful of these people.

                    They are rare and when you find one, don't let go of them -
                    ever.

                    Be blessed for the ones who get on at the worst stops when
                    no one is there.

                    Remember those people, they are special.

                    Always hold them dear to your heart.

                    Be very wary of people sneaking on at certain stops when
                    things are going good and acting like they have been there
                    for the whole ride.

                    For they will be the first to depart.

                    There will be ones who secretly try to get off the ride and
                    there will be those that very publicly will jump off.

                    Don't pay any heed to the defectors.

                    Pay heed to the passengers that are still on the trip.

                    They are the important ones.

                    If someone tries to get back on the train - don't be angry
                    or hold a grudge, let them.

                    Just see where they are around the next hard turn.

                    If they are buckled in - accept them.

                    If they are pulling the hand rail alarm again - then let
                    them off the train freely and waste no space in your head
                    for them again, ever.

                    There will be times that the train will be moving slow, at
                    almost a crawls pace.

                    Appreciate that you can take in the view.

                    There will be times where the train is going so fast that
                    everything is a blur.

                    Enjoy the sense of speed in your life, as it is exhilarating
                    but unsustainable.

                    There will also be the chance that the train derails.

                    If that does happen, it will hurt, a lot, for a long time.

                    But there will be people who will appear out of no where who
                    will get you back on track.

                    Those will be the people that will matter most in your life.

                    Love them forever.

                    For you can never repay these people.

                    The thing is, that even if you could repay them, they
                    wouldn't accept it anyway.

                    Just pay it forward.

                    Eventually your train will get to its final stop and you
                    will need to deboard.

                    At that time you will realize that life is about the journey
                    AND the destination.

                    Know and have faith that at the end of your ride your train
                    will have the right passengers on board and all the
                    passengers that were on board at one time or another were
                    there for a distinct purpose.

                    Enjoy the ride.” 
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <Link
                href="/"
                type="button"
                className="mb-12 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cheers to the Ride
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
