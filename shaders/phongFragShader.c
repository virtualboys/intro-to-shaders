varying vec3 Normal;
varying vec3 Position;

uniform vec3 Ka;
uniform vec3 Kd;
uniform vec3 Ks;
uniform vec4 LightPosition;
uniform vec3 LightIntensity;
uniform float Shininess;

vec3 phong() {
    vec4 lightPos = viewMatrix * LightPosition; // light position in view space
    vec3 n = normalize(Normal); // normalized normal
    vec3 s = normalize(vec3(lightPos) - Position); // vector from light to object
    vec3 v = normalize(vec3(-Position)); // vector from camera to object
    vec3 r = reflect(-s, n); // vector of reflected light

    vec3 ambient = Ka;
    vec3 diffuse = Kd * max(dot(s, n), 0.0);
    vec3 specular = Ks * pow(max(dot(r, v), 0.0), Shininess);

    return LightIntensity * (ambient + diffuse + specular);
}

void main() {
    gl_FragColor = vec4(phong(), 1.0);
}