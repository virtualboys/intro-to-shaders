
uniform vec4 LightPosition;

uniform vec3 Color1;
uniform vec3 Color2;
uniform vec3 Color3;

varying vec3 Normal;
varying vec3 Position;

void main()
{
	float intensity;
	vec3 color;

    vec4 lightPos = viewMatrix * LightPosition; // light position in view space
    vec3 n = normalize(Normal); // normalized normal
    vec3 s = normalize(vec3(lightPos) - Position); // vector from light to object

	intensity = max(dot(s, n), 0.0);

	if (intensity > 0.66)
		color = Color1;
	else if (intensity > 0.33)
		color = Color2;
	else
		color = Color3;

	gl_FragColor = vec4(color, 1.0);

}