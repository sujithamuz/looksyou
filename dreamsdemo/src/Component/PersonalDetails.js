import React, { useState } from "react";
import "./PersonalDetails.css";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Checkbox } from "primereact/checkbox";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

function PersonalDetails() {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <Card>
        <div className="text-center">
          <h3>PERSONAL DETAILS</h3>
        </div>
        <div class="grid">
          <div class="col col-offset-3">
            <div class="p-3 border-round-sm font-bold">
              <Card>
                <form>
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className=" flex justify-content-center">
                          <div className="flex flex-column gap-2 form-col">
                            <label htmlFor="First Name">First Name</label>
                            <InputText
                              id="firstname"
                              aria-describedby="username-help"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className=" flex justify-content-center">
                          <div className="flex flex-column gap-2 form-col">
                            <label htmlFor="Last Name">Last Name</label>
                            <InputText
                              id="lastname"
                              aria-describedby="username-help"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className=" flex justify-content-center">
                          <div className="flex flex-column gap-2 form-col">
                            <label htmlFor="email">Email</label>
                            <InputText
                              id="email"
                              aria-describedby="username-help"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className=" flex justify-content-center">
                          <div className="flex flex-column gap-2 form-col">
                            <label htmlFor="Phonenumber">Phone Number</label>
                            <InputText
                              id="phonenumber"
                              aria-describedby="username-help"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className=" flex justify-content-center">
                          <div className="flex flex-column gap-2 form-col">
                            <label htmlFor="date of birth">Date of Birth</label>
                            <InputText
                              id="date of birth"
                              aria-describedby="username-help"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className=" flex justify-content-center">
                          <div className="flex flex-column gap-2 form-col">
                            <label htmlFor="gender">Gender</label>

                            <div className="flex flex-wrap  checkbox gap-3">
                              <div className="flex align-items-center">
                                <Checkbox
                                  inputId="ingredient1"
                                  name="Male"
                                  value="Male"
                                />
                                <label htmlFor="ingredient1" className="ml-2">
                                  Male
                                </label>
                              </div>
                              <div className="flex align-items-center">
                                <Checkbox
                                  inputId="ingredient2"
                                  name="   Female"
                                  value="   Female"
                                />
                                <label htmlFor="ingredient2" className="ml-2">
                                  Female
                                </label>
                              </div>
                              <div className="flex align-items-center">
                                <Checkbox
                                  inputId="ingredient3"
                                  name="Not prefer to say"
                                  value="Not prefer to say"
                                />
                                <label htmlFor="ingredient3" className="ml-2">
                                  Not prefer to say
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>

        <div class="grid">
          <div className="row">
            <div class="col-6">
              <div
                class=" p-3 border-round-sm 
           font-bold"
              >
                <Card>
                  <form>
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <div className=" flex justify-content-center">
                            <div className="flex flex-column gap-2 form-col">
                              <label htmlFor="First Name">
                                10th School Name
                              </label>
                              <InputText
                                id="firstname"
                                aria-describedby="username-help"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className=" flex justify-content-center">
                            <div className="flex flex-column gap-2 form-col">
                              <label htmlFor="First Name">
                                10th Percentage{" "}
                              </label>
                              <InputText
                                id="firstname"
                                aria-describedby="username-help"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className=" flex justify-content-center">
                            <div className="flex flex-column gap-2 form-col">
                              <label htmlFor="First Name">
                                12th School Name{" "}
                              </label>
                              <InputText
                                id="firstname"
                                aria-describedby="username-help"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className=" flex justify-content-center">
                            <div className="flex flex-column gap-2 form-col">
                              <label htmlFor="First Name">
                                12th Percentage{" "}
                              </label>
                              <InputText
                                id="firstname"
                                aria-describedby="username-help"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </Card>
              </div>
            </div>
            <div class="col-6 ">
              <div
                class=" p-3 border-round-sm 
           font-bold"
              >
                <Card>
                  <form>
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <div className=" flex justify-content-center">
                            <div className="flex flex-column gap-2 form-col">
                              <label htmlFor="address">Address</label>

                              <InputTextarea
                                autoResize
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                rows={3}
                                cols={30}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col flex form-card">
                          <div className="col-6 ">
                            <div className=" flex justify-content-center">
                              <div className="flex flex-column gap-2 form-col">
                                <label htmlFor="Zipcode">Zipcode</label>
                                <InputText
                                  id="Zipcode"
                                  aria-describedby="username-help"
                                />
                              </div>
                            </div>
                          </div>
                          &nbsp;
                          <div className="col-6">
                            <div className=" flex justify-content-center">
                              <div className="flex flex-column gap-2 form-col">
                                <label htmlFor="City">City</label>
                                <InputText
                                  id="City"
                                  aria-describedby="username-help"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center ">
          <Button className="button-sub" label="submit" />
        </div>
      </Card>
    </div>
  );
}

export default PersonalDetails;
